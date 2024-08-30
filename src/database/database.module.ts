import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService], // Make DatabaseService available to other modules
})
export class DatabaseModule {}
