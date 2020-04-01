import { Test, TestingModule } from '@nestjs/testing';
import { Type1Controller } from './type1.controller';

describe('Type1 Controller', () => {
  let controller: Type1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Type1Controller],
    }).compile();

    controller = module.get<Type1Controller>(Type1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
