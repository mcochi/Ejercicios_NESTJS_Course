import { Test, TestingModule } from '@nestjs/testing';
import { Type0Controller } from './type0.controller';

describe('Type0 Controller', () => {
  let controller: Type0Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Type0Controller],
    }).compile();

    controller = module.get<Type0Controller>(Type0Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
