export type Question = {
  category: string;
  question: string;
  answer: string;
  code?: string
};

export type API = Question[];

export type APIResponse = {
  [key: string]: API;
};
