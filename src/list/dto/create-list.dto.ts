// src/list/dto/create-list.dto.ts
export class CreateListDto {
  name: string;
  description: string;
  criteria: {
    name: string;
    address: string;
    age: number;
    gender: string;
  };
}
