import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repositories';
import { PrismaService } from './prisma/prima.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
