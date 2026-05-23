const API_URL = "https://nexoratech-restfullapi.onrender.com";

export async function apiGet<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar dados em ${endpoint}`);
  }

  return response.json();
}

export async function apiPost<T, B>(endpoint: string, body: B): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Erro ao cadastrar dados em ${endpoint}`);
  }

  return response.json();
}

export async function apiPut<T, B>(endpoint: string, body: B): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Erro ao atualizar dados em ${endpoint}`);
  }

  return response.json();
}

export async function apiDelete(endpoint: string): Promise<void> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Erro ao remover dados em ${endpoint}`);
  }
}

export default API_URL;