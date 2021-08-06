import { HttpExceptionFilter } from './http-exception.filter';

describe('HttpException.FilterFilter', () => {
  it('should be defined', () => {
    expect(new HttpExceptionFilter()).toBeDefined();
  });
});
