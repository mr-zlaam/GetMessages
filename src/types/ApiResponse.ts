import { type Message } from "@/models/users.model";
export interface ApiResponseType {
  success: boolean;
  message: string;
  isAcceptingMessages?: boolean;
  messages?: Array<Message>;
}
