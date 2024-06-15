async function initialLoad() {
    const bodyEl = document.body
    const imgEl = document.createElement("img")
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY"
    );
    const responseJson = await Promise.resolve(await response.json()).then(res =>{ 
        imgEl.src= res[0].url
        bodyEl.append(imgEl)
        console.log(res)
    });
    return responseJson;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

console.log(initialLoad());
