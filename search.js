var items = [
{
  id: '001',
  name: 'Keyboard Logitek',
  price: 60000,
  desc: 'Keyboard yang mantap untuk kantoran',
  image: 'logitek.jpg',
},
{
  id: '002',
  name: 'Keyboard MSI',
  price: 300000,
  desc: 'Keyboard gaming MSI mekanik',
  image: 'msi.jpg',
},
{
  id: '003',
  name: 'Mouse Genius',
  price: 50000,
  desc: 'Mouse Genius biar lebih pinter',
  image: 'genius.jpeg',
},
{
  id: '004',
  name: 'Mouse Jerry',
  price: 30000,
  desc: 'Mouse yang disukai kucing',
  image: 'jerry.jpg',
},
];

const categories = [
  ...new Set(
    items.map((item) => {
      return item;
    })
    ),
  ];

document.getElementById('formItem').addEventListener('submit', (e) => {
  let value_inputan = document.getElementById('keyword').value.toLowerCase();
  const filteredData = categories.filter((item) => {
    return item.name.toLowerCase().includes(value_inputan);
  });
  displayItem(filteredData);
});

const displayItem = (items) => {
  document.getElementById('listBarang').innerHTML = items
  .map((item) => {
    var { id, name, price, desc, image } = item;
    return `
    <div class ="col-4 mt-2">
    <div class="card-group" style="width: 18rem;">
    <img src="img/${image}" class="card-img-top" height="200px" width="200px" alt="...">
    <div class="card-body">
    <h5 class="card-title" id="itemName">${name}</h5>
    <p class="card-text" id="itemDesc">${desc}</p>
    <p class="card-text">${price}</p>
    <a href="#" class="btn btn-primary btn-block addCart" data-id="${id}">Tambahkan ke keranjang</a>
    </div>
    </div>
    </div>
    `;
  }).join('');

  // Tambahkan event listener untuk setiap tombol "Tambahkan ke keranjang"
  document.querySelectorAll('.addCart').forEach((button) => {
    button.addEventListener('click', (e) => {
      const itemId = e.target.getAttribute('data-id');
      addToCart(itemId);
    });
  });
};

const addToCart = (itemId) => {
  cartCount++;
  document.getElementById(
    'cart'
    ).innerHTML = `<i class="fas fa-shopping-cart"></i>(${cartCount})`;
  console.log(`Item dengan ID ${itemId} berhasil ditambahkan ke keranjang`);
};

displayItem(categories);
