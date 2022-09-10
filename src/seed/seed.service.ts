import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  excecuteSeet() {
    return 'Seed executed succesfuly';
  }
}
