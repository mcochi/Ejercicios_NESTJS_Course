import { Test, TestingModule } from '@nestjs/testing';
import { Type1serviceService } from './type1service.service';

describe('Type1serviceService', () => {
  let service: Type1serviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Type1serviceService],
    }).compile();

    service = module.get<Type1serviceService>(Type1serviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
