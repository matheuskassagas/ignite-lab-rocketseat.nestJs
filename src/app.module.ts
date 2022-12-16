import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule } from './hhtp.module';
import { PrismaService } from './prima.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
