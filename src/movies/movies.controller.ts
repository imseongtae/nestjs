import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  // Put,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  // 무언가 필요하면 직접 요청해야 함(데코레이터를 통해)
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    // 변수는 바꿀 수 있음
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  // Put은 모든 리소스를 업데이트, Patch는 리소스의 일부분만 업데이트
  // @Put('/:id')
  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
