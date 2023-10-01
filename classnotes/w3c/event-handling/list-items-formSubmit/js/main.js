function list(count) {
  return [...Array(count)].map((_, key) => `<li>Item ${key + 1}</li>`).join('');
}

function handleSubmit(event) {
  event.preventDefault();

  const input = document.querySelector('input');

  const count = Number(input.value);

  document.querySelector('ul').innerHTML = list(count);
}
