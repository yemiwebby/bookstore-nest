import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService],
    }).compile();
    service = module.get<BooksService>(BooksService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
