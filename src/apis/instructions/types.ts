export interface InstructionItem {
  _id: string;
  userId: string;
  instructions: string;
  createdAt: string;
  updatedAt: string;
}

export interface InstructionResponse {
  message: string;
  status: number;
  data: InstructionItem;
}

export interface CreateInstructionData {
  instructions: string;
}
