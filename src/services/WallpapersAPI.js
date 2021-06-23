const URL = 'https://private-anon-92f82f79d3-lolwallpapers.apiary-mock.com/alpha/wallpapers?limit=10';

const getData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  const data = await json.data;

  return data;
};

export default getData;
