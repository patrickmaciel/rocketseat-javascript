console.log('webpack-dev-server on');

// async await content
const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000);
});

// minhaPromise()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// async function executaPromise() {
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
// };

// executaPromise();

const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}
executaPromise();
