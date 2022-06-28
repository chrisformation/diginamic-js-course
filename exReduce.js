(function () {
  const fruits = ["Banane", "Cerise", "Kiwi", "Pomme"]

  let result = fruits.reduce((previousValue, currentValue) => {
    if (currentValue.length < previousValue.length) {
      return currentValue;
    } else {
      return previousValue;
    }
  });

  console.log(result);

})()
