let products = [
  {
    id: 'MS001',
    name: 'Điện thoại Nokia 105 Single Sim (2017)',
    price: 327000,
    quantity: 1,
    img: 'img1.jpg'
  },
  {
    id: 'MS002',
    name: 'Điện Thoại Nokia 8110 4G',
    price: 660000,
    quantity: 3,
    img: 'img2.jpg'
  },
  {
    id: 'MS003',
    name: 'Điện Thoại Nokia 106 Dual Sim',
    price: 368000,
    quantity: 2,
    img: 'img3.jpg'
  },
  {
    id: 'MS004',
    name: 'Điện Thoại Nokia 150 Dual Sim',
    price: 589000,
    quantity: 4,
    img: 'img4.jpg'
  },
  {
    id: 'MS005',
    name: 'Điện thoại Nokia 3310 Dual Sim',
    price: 890000,
    quantity: 5,
    img: 'img5.jpg'
  }
];

function sumPrice() {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price * products[i].quantity;
  }
  return sum;
}

function renderContent() {
  let content = '';

  for (let i = 0; i < products.length; i++) {
    content += `<tr>
                  <td><img src="images/${products[i].img}" alt="${products[i].name}"></td>
                  <td class="_ti">${products[i].name}</td>
                  <td class="_ms">${products[i].id}</td>
                  <td class="_co">${products[i].price}</td>
                  <td class="_sl">${products[i].quantity}</td>
              </tr>`;
  }

  document.getElementById('products').innerHTML = content;
}

function sortColumn(thElement) {
  thElement = $(thElement);
  const column = thElement.attr('data-column');

  if (thElement.attr('data-order') === 'asc') {
    thElement.attr('data-order', 'desc');
    thElement.children().removeClass('fa fa-sort').addClass('fa fa-sort-desc');
    thElement.children().removeClass('fa fa-sort-asc').addClass('fa fa-sort-desc')
    sortAz(column);
  } else {
    thElement.attr('data-order', 'asc');
    thElement.children().removeClass('fa fa-sort-desc').addClass('fa fa-sort-asc');
    sortZa(column);
  }
  renderContent();
}

function sortAz(column) {
  products.sort(function (a, b) {
    let x = a[column];
    let y = b[column];

    if (typeof x == 'string') x = x.toLocaleLowerCase()
    if (typeof y == 'string') y = y.toLocaleLowerCase()
      
    if (x < y) return -1;
    if (x > y) return 1;

    return 0;
  })
}

function sortZa(column) {
  products.sort(function (a, b) {
    let x = a[column];
    let y = b[column];

    if (typeof x == 'string') x = x.toLocaleLowerCase()
    if (typeof y == 'string') y = y.toLocaleLowerCase()

    if (x < y) return 1;
    if (x > y) return -1;

    return 0;
  })
}

renderContent();
document.getElementById('total-price').innerText = sumPrice();