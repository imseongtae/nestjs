import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  // Put,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    // return 'This will return all movies';
    return this.moviesService.getAll();
  }

  // 파라미터에 전달하는 인자 id로 인식할 수 있으므로, @Get('/:id') 보다 위에 적는다.
  // @Get('search')
  // search(@Query('year') searchingYear: string) {
  //   return `We are searching for a movie made after: ${searchingYear}`;
  // }

  // 무언가 필요하면 직접 요청해야 함(데코레이터를 통해)
  // 변수는 바꿀 수 있음
  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    // return 'This will create a movie';
    return this.moviesService.create(movieData);
  }

  @Post('existing-user')
  existingUser(@Body() userData) {
    console.log(userData);
    const res = {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJzdHJpbmciLCJuYW1lIjoi7J207IOB66-8IiwicGhvbmUiOiIrODIgMTAtNDQ1Ni03OTI4IiwiZ21haWwiOiJnZ3VnZUBtYWlsLmNvbSIsImlhdCI6MTYyMTQ0NjE4NiwiZXhwIjoxNjI0MDM4MTg2fQ.My_a992YPzGhisADzmfVozxpFJ7PVmZ5rNoQGSbo2i0',
    };
    return res;
  }

  @Delete('/:id')
  delete(@Param('id') movieId: number) {
    // return `This will delete a movie with the id: ${movieId}`;
    return this.moviesService.deleteOne(movieId);
  }

  // Put은 모든 리소스를 업데이트, Patch는 리소스의 일부분만 업데이트
  // @Put('/:id')
  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData) {
    // return `This will patch a movie with the id: ${movieId}`;
    return this.moviesService.update(movieId, updateData);
  }
}
