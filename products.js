let products = [
   { unitPrice: 100, productName: "Ürün 1", discount: true, rate: 15 },
   { unitPrice: 150, productName: "Kaliteli Ürün 2", discount: false, rate: 0 },
   { unitPrice: 200, productName: "Kaliteli Ürün 3", discount: true, rate: 2.5 },
];

// - İsme göre filtreleme fonksiyonu
function getProductsByName(productName) {
   let productsResult = products.filter(p =>
      p.productName.includes(productName),
   );
   console.log(productsResult);
   console.log(`Arama sonucu bulunan ürün sayısı: ${productsResult.length}`);
}

console.log('*************');
console.log('getProductsByName');
getProductsByName('Kaliteli');

// - İsme göre ilk bulunan productu getirme fonksiyonu
function getProductByName(productName) {
   let product = products.find(p =>
      p.productName.includes(productName),
   );
   console.log(product);
}

console.log('*************');
console.log('getProductByName');
getProductByName('Kaliteli');


// - unitPrice < Parametre getirme fonksiyonu(array)
function getProductsBySmallerUnitPrice(price) {
   let filteredProducts = products.filter(p => p.unitPrice < price);
   console.log(filteredProducts);
}

console.log('*************');
console.log('getProductsBySmallerUnitPrice');
getProductsBySmallerUnitPrice(150);

// - unitPrice > Parametre getirme fonksiyonu(array)
function getProductsByGreaterUnitPrice(price) {
   let filteredProducts = products.filter(p => p.unitPrice > price);
   console.log(filteredProducts);
}

console.log('*************');
console.log('getProductsByGreaterUnitPrice');
getProductsByGreaterUnitPrice(150);

// - indirimdeki ürünleri getirme
function getProductsByDiscount() {
   let filteredProducts = products.filter(p => p.discount == true);
   console.log(filteredProducts);
}

console.log('*************');
console.log('getProductsByDiscount');
getProductsByDiscount();

// - ürün ekleme
function addProduct(product) {
   products.push(product);
   console.log(products);
}

console.log('*************');
console.log('addProduct');
addProduct({ unitPrice: 230, productName: "Ürün 4", discount: true, rate: 30 });

// - verilen isim ile ürün silme
function deleteProduct(productName) {
   let filteredProducts = products.filter(p => !p.productName.includes(productName));
   products = [...filteredProducts]; // spread
   console.log(products);
}

console.log('*************');
console.log('deleteProduct');
deleteProduct("Ürün 3");

// - tüm ürünleri getirme
function getAllProducts(productName) {
   return products;
}

console.log('*************');
console.log('getAllProducts');
const returnedProducts = getAllProducts();
console.log(returnedProducts);