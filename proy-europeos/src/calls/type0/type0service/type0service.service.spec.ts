import { Test, TestingModule } from '@nestjs/testing';
import { Type0serviceService } from './type0service.service';

describe('Type0serviceService', () => {
  let service: Type0serviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Type0serviceService],
    }).compile();

    service = module.get<Type0serviceService>(Type0serviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
