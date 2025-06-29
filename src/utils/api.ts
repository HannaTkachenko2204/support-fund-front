// хелпер для автоматичного оновлення токена
export const fetchWithRefresh = async (url: string, options: RequestInit = {}) => {
    const accessToken = localStorage.getItem('accessToken');
  
    const headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };
  
    const response = await fetch(url, { ...options, headers, credentials: 'include' });
  
    if (response.status === 401) {
      // Спробувати оновити токен
      const refreshRes = await fetch('http://localhost:5000/api/auth/refresh', {
        method: 'POST',
        credentials: 'include',
      });
  
      if (refreshRes.ok) {
        const { accessToken: newAccessToken } = await refreshRes.json();
        localStorage.setItem('accessToken', newAccessToken);
  
        // Повторити оригінальний запит з новим токеном
        const retryHeaders = {
          ...headers,
          Authorization: `Bearer ${newAccessToken}`,
        };
  
        return fetch(url, { ...options, headers: retryHeaders, credentials: 'include' });
      } else {
        throw new Error('Unauthorized and refresh failed');
      }
    }
  
    return response;
  };
  