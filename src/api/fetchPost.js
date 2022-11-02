export default async function fetchPost(url, payLoad) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(payLoad),
    });
    const data = await response.json();
    console.log('data', data);
    return { data };
  }