// хелпери fetchBase і fetchWithRefresh для автоматичного оновлення токена
const API_URL = import.meta.env.VITE_API_URL;

export const fetchBase = (endpoint: string, options: RequestInit = {}) => {
  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include',
  });
};

export const fetchWithRefresh = async (endpoint: string, options: RequestInit = {}) => {
  const accessToken = localStorage.getItem('accessToken');

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  let response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
    credentials: 'include',
  });

  if (response.status === 401) {
    // Спроба оновити токен
    const refreshRes = await fetch(`${API_URL}/auth/refresh`, {
      method: 'POST',
      credentials: 'include',
    });

    if (refreshRes.ok) {
      const { accessToken: newAccessToken } = await refreshRes.json();
      localStorage.setItem('accessToken', newAccessToken);

      // Повторити оригінальний запит з новим токеном (await!)
      response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
          ...headers,
          Authorization: `Bearer ${newAccessToken}`,
        },
        credentials: 'include',
      });
    } else {
      throw new Error('Unauthorized and refresh failed');
    }
  }

  return response;
};
