export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-API-Host': 'exercisedb.p.api.com',
    'X-API-Key': process.env.REACT_APP__API_KEY,
  },
};////

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-API-Host': 'youtube-search-and-download.p.api.com',
    'X-API-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
