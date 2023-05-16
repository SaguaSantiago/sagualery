import { API_KEY } from '@/utilities/API_KEY'

export default function getSearchedPhotos({ url, query, orientation, color, size, lang }) {
  return fetch(
    `${url}?page=1&query=${query}&per_page=80&orientation=${orientation}&color=${color}&size=${size}&locale=${lang}`,
    {
      headers: {
        authorization: API_KEY,
      },
    },
  ).then((res) => res.json())
}

export const getNextPhotos = ({ url }) => {
  return fetch(url, {
    headers: {
      authorization: API_KEY,
    },
  }).then((res) => res.json())
}
