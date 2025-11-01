const BASE_URL = 'https://fakestoreapi.com';

export const baseApi = {
  async get<T>(path: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`);

    if (!res.ok) {
      throw new Error(`GET ${path}: ${res.status}`);
    }

    return res.json();
  },

  async post<T>(path: string, body: unknown): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`POST ${path}: ${res.status}`);
    }

    return res.json();
  },

  async put<T>(path: string, body: unknown): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`PUT ${path}: ${res.status}`);
    }

    return res.json();
  },

  async delete<T>(path: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, { method: 'DELETE' });

    if (!res.ok) {
      throw new Error(`DELETE ${path}: ${res.status}`);
    }

    return res.json();
  },
};
