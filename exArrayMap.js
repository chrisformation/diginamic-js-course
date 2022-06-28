(function() {
  let fruits = ["Banane", "Cerise"];

  const list_fruits = fruits.map(function(fruit) {
    return `<li>${fruit}</li>`;
  });

  console.log(`<ul>${list_fruits}</ul>`);
  document.write(`<ul>${list_fruits}</ul>`);
})()
