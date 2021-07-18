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

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  // 파라미터에 전달하는 인자 id로 인식할 수 있으므로, @Get('/:id') 보다 위에 적는다.
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  // 무언가 필요하면 직접 요청해야 함(데코레이터를 통해)
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    // 변수는 바꿀 수 있음
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    // return 'This will create a movie';
    return movieData;
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
