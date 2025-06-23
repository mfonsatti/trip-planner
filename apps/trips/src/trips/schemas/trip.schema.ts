import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Trip extends Document {
  @Prop({ required: true })
  origin: string;

  @Prop({ required: true })
  destination: string;

  @Prop()
  cost: number;

  @Prop()
  duration: number;

  @Prop()
  display_name: string;
}

export const TripSchema = SchemaFactory.createForClass(Trip);
