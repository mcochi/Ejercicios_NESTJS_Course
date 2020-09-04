import { Test, TestingModule } from '@nestjs/testing';
import { SriController } from './sri.controller';

describe('Libro Controller', () => {
  let controller: SriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SriController],
    }).compile();

    controller = module.get<SriController>(SriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
