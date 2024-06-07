'use client';

import { useApiContext } from '@/context/ApiContext';
import { News, NewsHeadline, NewsSecondary } from '@/domain';
import Api from '@/services/Api.service';
import { useState } from 'react';

type Response<T> = {
  loading: boolean;
  error: string | null;
  data: T;
};

interface UseApiReturnType {
  getHeadline: () => Promise<void>;
  getSecondary: () => Promise<void>;
  getShow: (id: string) => Promise<void>;
  test: () => Promise<boolean>;
  headline: Response<NewsHeadline[]>;
  secondary: Response<NewsSecondary[]>;
  show: Response<News>;
}

const useApi = (): UseApiReturnType => {
  const { apiUrl } = useApiContext();
  const api = new Api(apiUrl);

  const [headline, setHeadline] = useState<Response<NewsHeadline[]>>(
    {} as Response<NewsHeadline[]>,
  );
  const [secondary, setSecondary] = useState<Response<NewsSecondary[]>>(
    {} as Response<NewsSecondary[]>,
  );
  const [show, setShow] = useState<Response<News>>({} as Response<News>);

  const getHeadline = async () => {
    setHeadline({ loading: true, error: null, data: {} as NewsHeadline[] });
    try {
      const data = await api.headline();

      setHeadline((prevState) => ({ ...prevState, data: data }));
    } catch (err) {
      setHeadline((prevState) => ({
        ...prevState,
        error: (err as Error).message,
      }));
    } finally {
      setHeadline((prevState) => ({ ...prevState, loading: false }));
    }
  };

  const getSecondary = async () => {
    setSecondary({ loading: true, error: null, data: {} as NewsSecondary[] });
    try {
      const data = await api.secondary();

      setSecondary((prevState) => ({ ...prevState, data: data }));
    } catch (err) {
      setSecondary((prevState) => ({
        ...prevState,
        error: (err as Error).message,
      }));
    } finally {
      setSecondary((prevState) => ({ ...prevState, loading: false }));
    }
  };

  const getShow = async (id: string) => {
    setShow({ loading: true, error: null, data: {} as News });
    try {
      const data = await api.show(id);

      setShow((prevState) => ({ ...prevState, data: data }));
    } catch (err) {
      setShow((prevState) => ({ ...prevState, error: (err as Error).message }));
    } finally {
      setShow((prevState) => ({ ...prevState, loading: false }));
    }
  };

  const test = async () => {
    try {
      await api.test();
      return true;
    } catch {
      return false;
    }
  };

  return {
    getHeadline,
    getSecondary,
    getShow,
    test,
    headline,
    secondary,
    show,
  };
};

export default useApi;
