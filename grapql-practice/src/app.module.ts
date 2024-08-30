import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { BookModule } from './book/book.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(),'src/schema.gql'), 
      // definitions: {
      //   path: join(process.cwd(),'src/graphql.ts'),
        
      // }
   
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppResolver,AppService],
})
export class AppModule {}
