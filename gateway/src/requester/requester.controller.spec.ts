import { Test, TestingModule } from '@nestjs/testing';
import { RequesterController } from './requester.controller';

describe('RequesterController', () => {
  let controller: RequesterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequesterController],
    }).compile();

    controller = module.get<RequesterController>(RequesterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
