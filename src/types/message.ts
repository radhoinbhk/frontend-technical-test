export interface Message {
  id: number;
  conversationId: number;
  authorId: number;
  timestamp: number;
  body: string;
}

export interface newMessageDataType {
  body: string;
  timestamp: number;
  conversationId: number;
  authorId: number;
}
