import { Test, TestingModule } from '@nestjs/testing';
import { LoraController } from './lora.controller';

describe('Lora Controller', () => {
  let controller: LoraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoraController],
    }).compile();

    controller = module.get<LoraController>(LoraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
