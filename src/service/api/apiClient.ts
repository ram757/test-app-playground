
const fetchOptions = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
}

export default class ApiClient {
  public static get<T>(url: string): Promise<T> {
    return fetch(url, {...fetchOptions, method: 'GET'})
      .then(res => res.json() as Promise<T>);
  }

  public static post<T>(url: string, body: any): Promise<T> {
    return fetch(url, {...fetchOptions, method: 'POST', body: JSON.stringify(body)})
      .then(res => res.json() as Promise<T>);
  }

  public static put<T>(url: string, body: any): Promise<T> {
    return fetch(url, {...fetchOptions, method: 'PUT', body: JSON.stringify(body)})
    .then(res => res.json() as Promise<T>);
  }

  public static patch<T>(url: string, body: any): Promise<T> {
    return fetch(url, {...fetchOptions, method: 'PATCH', body: JSON.stringify(body)})
    .then(res => res.json() as Promise<T>);
  }

  public static delete<T>(url: string): Promise<T> {
    return fetch(url, {...fetchOptions, method: 'DELETE'})
    .then(res => res.json() as Promise<T>);
  }
}