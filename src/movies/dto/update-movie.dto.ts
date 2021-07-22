import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// 'class-validator'의 IsOptional 옵션이 적용된 효과
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
