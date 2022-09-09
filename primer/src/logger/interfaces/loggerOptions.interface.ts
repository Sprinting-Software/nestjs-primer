export interface Tag {
  name: string;
  tagGroup: string;
  order: number;
}

export interface LoggerOptions {
  tags: Tag[];
}
