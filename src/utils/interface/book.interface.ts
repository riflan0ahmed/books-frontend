export interface InterfaceBook {
  _id?: string;
  name: string;
  category: string;
  quantity: number;
  amount: number;
  createdAt?: number;
  updatedAt?: Date;
  isArchived?: boolean;
}
