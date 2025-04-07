export type Question = {
  question: string;
  answer: string;
  code?: string;
  categoryName: string;
};

export type Category = {
  id: number;
  name: string;
};

export type ApiResponse<T> =
  | {
      data: T;
    }
  | {
      error: string;
    };
