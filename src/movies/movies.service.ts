import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

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

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter(movie => movie.id !== id);
  }
}
