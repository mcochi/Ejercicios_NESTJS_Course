"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const libro_controller_1 = require("./libro/libro.controller");
const rest_service_1 = require("./rest/rest.service");
const mongoose_1 = require("@nestjs/mongoose");
const libro_schema_1 = require("./schema/libro.schema");
const auth_module_1 = require("../auth/auth.module");
const users_module_1 = require("../users/users.module");
let ApiModule = class ApiModule {
};
ApiModule = __decorate([
    common_1.Module({
        controllers: [libro_controller_1.LibroController],
        providers: [rest_service_1.RestService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    collection: 'libros',
                    name: 'Libro',
                    schema: libro_schema_1.LibroSchema
                }]),
            auth_module_1.AuthModule,
            users_module_1.UsersModule
        ],
    })
], ApiModule);
exports.ApiModule = ApiModule;
//# sourceMappingURL=api.module.js.map