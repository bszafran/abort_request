import { API_URL } from "../../settings"

const GET = (endpoint: string, signal?: AbortSignal, params?: any) => {
  let queryParams = ""
  if (params) {
    for (let property in params) {
      queryParams = queryParams + `&${property}=${params[property]}`
    }
  }

  return fetch(
    `${API_URL}/${endpoint}?delay=3${queryParams}`,
    signal && { signal }
  ).then((res) => res.json())
}

export { GET }
