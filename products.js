let products = [
   { unitPrice: 100, productName: "Ürün 1", discount: true, rate: 15 },
   { unitPrice: 150, productName: "Kaliteli Ürün 2", discount: false, rate: 0 },
   { unitPrice: 200, productName: "Kaliteli Ürün 3", discount: true, rate: 2.5 },
];

console.log('İsme göre filtreleme fonksiyonu');
const getProductsByName = name => products.filter(p => p.productName.includes(name));
console.log(getProductsByName('Kaliteli'));
console.log(`Arama sonucu bulunan ürün sayısı: ${getProductsByName('Kaliteli').length}`);

console.log('\nİsme göre ilk bulunan productu getirme fonksiyonu');
const getProductByName = name => products.find(p => p.productName.includes(name));
console.log(getProductByName('Kaliteli'));

console.log('\nunitPrice < Parametre getirme fonksiyonu(array)');
const getProductsBySmallerUnitPrice = price => products.filter(p => p.unitPrice < price);
console.log(getProductsBySmallerUnitPrice(150));

console.log('\nunitPrice > Parametre getirme fonksiyonu(array)');
const getProductsByGreaterUnitPrice = price => products.filter(p => p.unitPrice > price);
console.log(getProductsByGreaterUnitPrice(150));

console.log('\nİndirimdeki ürünleri getirme');
const getProductsByDiscount = () => products.filter(p => p.discount == true);
console.log(getProductsByDiscount());

console.log('\nÜrün ekleme');
const addProduct = (unitPrice, productName, discount, rate) => products.push({ unitPrice, productName, discount, rate });
addProduct(230, 'Ürün 4', true, 30);
console.log(products);

console.log('\nVerilen isim ile ürün silme');
const deleteProduct = productName => products = products.filter(p => !p.productName.includes(productName));
console.log(deleteProduct('Ürün 3'));

console.log('\nTüm ürünleri getirme');
const getAllProducts = () => products;
console.log(getAllProducts());