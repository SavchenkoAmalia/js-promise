const makePromise = (text, errorText, delay) => {
  const random = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random > 5) {
        resolve(text);
      } else {
        reject(errorText);
      }
    }, delay);
  });
};

const player1 = makePromise("успіх1", "не успіх", 1000);
const player2 = makePromise("успіх2", "не успіх", 2000);
const player3 = makePromise("успіх3", "не успіх", 3000);
const player4 = makePromise("успіх4", "не успіх", 4000);
const player5 = makePromise("успіх5", "не успіх", 5000);

Promise.race([player1, player2, player3, player4, player5])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(1);
  });

Promise.all([player1, player2, player3, player4, player5])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(1);
  });

  Promise.any([player1, player2, player3, player4, player5])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(1);
  });

