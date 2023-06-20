import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManalModule } from './manal/manal.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionModule } from './region/region.module';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bvs9ezmpmsoxyiccmjvb-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'urdcngdgjraasix6',
      password: 'yCFr4rwsalHPYwBxidvI',
      database: 'bvs9ezmpmsoxyiccmjvb',
      entities: ["dist/**/entities/**.entity{.ts,.js}"],
      synchronize: true,
    })
    
    , ManalModule, RegionModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
