export interface UseSocketParams<T> {
  url: string;
  getData: (data: T) => void;
}

export interface GetUrlParams {
  endpoint: string;
  from: string;
  to: string;
}
