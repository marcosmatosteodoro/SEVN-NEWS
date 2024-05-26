import { News, NewsHeadline, NewsSecondary } from '@/domain';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

class Api {
  private client: AxiosInstance;
  private endpoins: {
    headline: string;
    secondary: string;
    show: string;
  }

  constructor(baseURL: string) {
    this.client = axios.create({ baseURL });
    this.endpoins = {
      headline: '/news/headline',
      secondary: '/news/secondary',
      show: '/news/',
    }
  }

  private async GET<T>(endpoint: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.client.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(`GET request to ${endpoint} failed: ${error}`);
    }
  }

  public async headline(): Promise<NewsHeadline[]> {
    return await this.GET<NewsHeadline[]>(this.endpoins.headline);
  }

  public async secondary(): Promise<NewsSecondary[]> {
    return await this.GET<NewsSecondary[]>(this.endpoins.secondary);
  }

  public async show(id: string): Promise<News> {
    return await this.GET<News>(`${this.endpoins.show}${id}`);
  }

  public async test(): Promise<boolean> {
    try {
      await this.client.get('/news/headline');
      return true;
    } catch {
      return false;
    }
  }
}

export default Api;
