const apiKeys = {
  ipGeolocation: '7202d97c1c3e489392a751327f3ccb8f',
};

async function getUserCity() {
  const response = await fetch(`https:api.ipgeolocation.io/ipgeo?apiKey=${apiKeys.ipGeolocation}`);
  const { city } = await response.json();
  return city;
}

async function run() {
  try {
    const userCity = await getUserCity();

    console.log(userCity);
  } catch (err) {
    console.log(err.message);
  }
}

run();
