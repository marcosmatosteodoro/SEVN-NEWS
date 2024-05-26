import { Category } from "./";

export type News = {
  id: string;
  title: string;
  category: Category;
  image: string;
  first_sentence: string;
  content: string;
  headline: boolean;
}

export type NewsHeadline = Omit<News, 'headline' | 'content' | 'first_sentence'>;
export type NewsSecondary = Omit<News, 'headline' | 'image'>;