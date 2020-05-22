const listItem = document.querySelectorAll('.list-group-item')
listItem.forEach(item => {
  if (Number(item.dataset.id) % 2 === 0) { item.style.backgroundColor = `rgb(80, 80, 80, 0.1)` }
  if (Number(item.dataset.id) % 2 === 1) { item.style.backgroundColor = `rgb(80, 80, 80, 0.2` }
})