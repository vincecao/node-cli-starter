import axios, {
  AxiosError,
  AxiosInstance,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from "axios";

function requestInterceptor(config: InternalAxiosRequestConfig) {
  // modify axios config, such as headers or request fields if needed
  // config.headers.Authorization = `Bearer ${token}`;
  return config;
}

const responseFulfilledInterceptor = undefined;

function responseRejectedInterceptor(err: AxiosError) {
  console.error("API error", err.response);
  throw err;
}

export class Client {
  #instance: AxiosInstance;

  constructor(args?: CreateAxiosDefaults) {
    this.#instance = axios.create(args);
    this.#overrideInterceptors();
  }

  #overrideInterceptors() {
    this.#instance.interceptors.request.use(requestInterceptor);
    this.#instance.interceptors.response.use(
      responseFulfilledInterceptor,
      responseRejectedInterceptor
    );
  }

  demo = {
    catFacts: async () => {
      const url = "https://catfact.ninja/fact";
      const { data } = await this.#instance.get<{
        fact: string;
        length: number;
      }>(url);
      return data;
    },
    predictNationality: async (name: string) => {
      const url = "https://api.nationalize.io";
      const { data } = await this.#instance.get<unknown>(url, {
        params: { name },
      });
      return data;
    },
  };
}
