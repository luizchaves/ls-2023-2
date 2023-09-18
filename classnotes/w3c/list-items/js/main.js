function list(count) {
  // let items = '';

  // for (let flag = 1; flag <= count; flag++) {
  //   items += `<li>Item ${flag}</li>`;
  // }

  // https://www.g2i.co/blog/heres-why-mapping-a-constructed-array-in-javascript-doesnt-work-and-how-to-do-it-correctly
  const items = [...Array(count)]
    .map((_, key) => `<li>Item ${key + 1}</li>`)
    .join('');

  // return `<ul>${items}</ul>`;
  return items;
}

function handleClick() {
  const count = Number(prompt('Informe a quantidade de itens:'));

  // document.write(list(count));
  document.querySelector('ul').innerHTML = list(count);
}
