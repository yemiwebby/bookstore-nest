import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';

describe('Books Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [BooksController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: BooksController = module.get<BooksController>(BooksController);
    expect(controller).toBeDefined();
  });
});
