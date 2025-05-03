const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved");
  }, 2000);
});

myPromise.then((message) => {
  console.log(message);
});

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/pcroducts.json"
);

fetchPromise
  .then((response) => {
    if(!response.ok){
        throw new Error('HTTP error.');
    }
    return response.json();
  })
  .then((response) => {
    console.log(response[3]);
  })
  .catch((error) =>{
    console.log('Error is', error);
  })
