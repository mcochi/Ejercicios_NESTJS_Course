#!/usr/bin/env python
# coding: utf-8

import requests
from pandas.io.json import json_normalize
import pandas as pd
from pymongo import MongoClient
import datetime


def extraccion_ine_bio():
    # Ahora vamos a hacer que lo meta todo en un bucle for y que vaya cargando los valores de cada uno
    now = datetime.datetime.now()
    for year in range (2015, now.year + 1): # Le sumo uno porque sino no pregunta por el año en el que estamos, aunque habitualmente las estadísticas no se encuentren actualizadas en esa fecha       
        activador = 0
        activador2 = 0
    
    # Gasto Biotecnología Total
    # -------------------------------------------------------------------------------------------------------
    # 1) Petición al servicio de la información
        resp = requests.get("http://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/t14/p057/bio/a" + str(year) + "/l0/07002.px")
    # 2) Parseo y lectura del json obtenido
        if (str(resp.status_code) == "200") :
            msgs = pd.json_normalize(resp.json(),record_path='Data',meta='Nombre').fillna(-2)
        # 3) Transformaciones en el dataframe para homogeneizar
            nombres = msgs.Nombre.str.split(',').str[0].values
            valor = msgs.Valor.values
            Indicador = msgs.Nombre.str.rsplit(',').str[-1].values #-1 indicates take last ocurrence
        # 4) Guardado y export
            bbdd = pd.DataFrame(
            {
            'region':nombres.astype(str), #Poner todo Euskadi
            'indicador': Indicador.astype(str),
            'valor':valor
            }
            )
            activador = 1
            bbdd.region[bbdd.region == 'TOTAL'] = 'Total Nacional'
        else :
            print('El año ' + str(year) + "no presenta información")
 
    # Gasto Biotecnología Empresas
    # -------------------------------------------------------------------------------------------------------
    # 1) Petición al servicio de la información
        resp = requests.get("http://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/t14/p057/bio/a"  + str(year) + "/l0/07003.px")
    # 2) Parseo y lectura del json obtenido
        if (str(resp.status_code) == "200") :
            msgs = pd.json_normalize(resp.json(),record_path='Data',meta='Nombre').fillna(-2)
        # 3) Transformaciones en el dataframe para homogeneizar
            nombres = msgs.Nombre.str.split(',').str[0].values
            valor = msgs.Valor.values
            Indicador = msgs.Nombre.str.rsplit(',').str[-1].values #-1 indicates take last ocurrence
        # 4) Guardado y export
            bbddemp = pd.DataFrame(
            {
            'region':nombres.astype(str), #Poner todo Euskadi
            'indicador': Indicador.astype(str),
            'valor':valor
            }
            )
            activador2 = 1
            bbddemp.region[bbddemp.region == 'TOTAL'] = 'Total Nacional'
        else : 
            print('El año ' + str(year) + "no presenta información")
         

    # Meterlo en la BBDD conforme se va generando
    #---------------------------------------------------------------------------------------------------------------------------
    # Consolidación de ambas Bases de datos
    #['Region','Year', 'GastoBioTotal','PersBioTotal','InvBioTotal','GastoBioEmp','PersBioEmp', 'InvBioEmp']
        if (activador == 1 & activador2 == 1) :
            bbddfinal = pd.DataFrame(
            {
            'region': bbdd.region.unique(),
            'year': year,
            'GastoBioTotal': [bbdd[(bbdd.region == x) & (bbdd.indicador == ' Gastos internos (miles de euros)')].valor.astype(float).values[0] for x in bbdd.region.unique()],
            'PersBioTotal': [bbdd[(bbdd.region == x) & (bbdd.indicador == ' Personal en EJC: Total personal')].valor.astype(float).values[0] for x in bbdd.region.unique()],
            'InvBioTotal': [bbdd[(bbdd.region == x) & (bbdd.indicador == ' Investigadores en EJC: Total personal')].valor.astype(float).values[0] for x in bbdd.region.unique()],
            'GastoBioEmp': [bbddemp[(bbddemp.region == x) & (bbddemp.indicador == ' Personal en EJC: Total personal')].valor.astype(float).values[0] for x in bbdd.region.unique()],
            'PersBioEmp': [bbddemp[(bbddemp.region == x) & (bbddemp.indicador == ' Personal en EJC: Total personal')].valor.astype(float).values[0] for x in bbdd.region.unique()],
            'InvBioEmp': [bbddemp[(bbddemp.region == x) & (bbddemp.indicador == ' Investigadores en EJC: Total personal')].valor.astype(float).values[0] for x in bbdd.region.unique()]
            }
            )
            client = MongoClient('mongodb://127.0.0.1:27017')
            db = client['Contabilidad_trimestral']
            collection_region = db['biotecnologia']
            bbdd.reset_index(inplace=True) 
            bbdd_dict = bbddfinal.to_dict("records") # Convert to dictionary
            x = collection_region.insert_many(bbdd_dict)

        # Ahora faltaría incluir cada vez en la bbdd MongoDB cada uno de las bbdd preparadas. Esto lo dejo para cuando pueda integrarlo con la aplicación.
            print(bbddfinal)
        else :
            print(str(year) + " has no information to be stored")
        
        

if __name__ == "__main__":
    extraccion_ine_bio()






