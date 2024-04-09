import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAT: Date;
}

const messageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAT: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export default mongoose.model<Message>("Message", messageSchema);
