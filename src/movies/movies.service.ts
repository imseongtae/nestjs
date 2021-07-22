import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  // return `This will return one movie with the id: ${movieId}`;
  getOne(id: number): Movie {
    // Param으로 전달 받는 값의 type이 string...
    // Number로 데이터 타입을 바꾸지 않으면 에러
    const movie = this.movies.find(movie => movie.id === Number(id));
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return movie;
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter(movie => movie.id !== Number(id));
  }

  // 데이터의 유효성을 검사하는 기능이 필요함
  update(id: number, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({
      ...movie,
      ...updateData,
    });
  }
}
