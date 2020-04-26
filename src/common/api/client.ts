import { API_URL } from "../../settings"

const GET = (endpoint: string, signal?: AbortSignal, params?: string) => {
  return fetch(
    `${API_URL}/${endpoint}?delay=3`,
    signal && { signal }
  ).then((res) => res.json())
}

export { GET }
