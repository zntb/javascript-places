const apiKey = fetch('http://localhost:3000/getApiKey')
  .then((response) => response.json())
  .then((data) => {
    const apiKey = data.apiKey;

    console.log('API Key:', apiKey);
  })
  .catch((error) => console.error('Error fetching API key:', error));

export async function getCoordsFromAddress(address) {
  const urlAddress = encodeURI(address);
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${apiKey}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch coordinates. Please try again.');
  }
  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }

  console.log(data);
  const coordinates = data.results[0].geometry.location;
  return coordinates;
}
