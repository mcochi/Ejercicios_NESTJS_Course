import { Test, TestingModule } from '@nestjs/testing';
import { LoraService } from './lora.service';

describe('LoraService', () => {
  let service: LoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoraService],
    }).compile();

    service = module.get<LoraService>(LoraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
