import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class BodyNotification {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 100)
  content: string;

  @IsNotEmpty()
  category: string;
}
