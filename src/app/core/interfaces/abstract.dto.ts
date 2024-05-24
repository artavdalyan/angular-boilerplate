export interface AbstractDto {
  id: Uuid;
  createdAt: string;
  updatedAt: string;
}

export interface AbstractImageDto {
  id: Uuid;
  imageKey: string;
  blurHash: string;
}
