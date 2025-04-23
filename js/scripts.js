// CONSTANTES DEL DOM
const defaultElement = document.getElementById('default');
const nameElement = document.getElementById('name');
const priceElement = document.getElementById('price');

//CONSTANTES DE JS
const allProducts = [
	{
		id: '362eb9c8-7d07-476a-891c-7ff627e77070',
		name: 'Waffle',
		title: 'Waffle with Berries',
		price: 6.5,
		imgMobile: './assets/images/image-waffle-mobile.jpg',
		imgTablet: './assets/images/image-waffle-tablet.jpg',
		imgDesktop: './assets/images/image-waffle-desktop.jpg',
		imgThumbnail: './assets/images/image-waffle-thumbnail.jpg',
		alt: 'A waffle tower with sliced strawberries and icing sugar.'
	}
];

// const allProducts = [
// 	{
// 		id: '362eb9c8-7d07-476a-891c-7ff627e77070',
// 		name: 'Waffle',
// 		title: 'Waffle with Berries',
// 		price: 6.5,
// 		imgMobile: './assets/images/image-waffle-mobile.jpg',
// 		imgTablet: './assets/images/image-waffle-tablet.jpg',
// 		imgDesktop: './assets/images/image-waffle-desktop.jpg',
// 		imgThumbnail: './assets/images/image-waffle-thumbnail.jpg',
// 		alt: 'A waffle tower with sliced strawberries and icing sugar.'
// 	},
// 	{
// 		id: 'af2b4eb6-e180-4e7e-a2c7-221662c7e47b',
// 		name: 'Crème Brûlée',
// 		title: 'Vanilla Bean Crème Brûlée',
// 		price: 7.0,
// 		imgMobile: './assets/images/image-creme-brulee-mobile.jpg',
// 		imgTablet: './assets/images/image-creme-brulee-tablet.jpg',
// 		imgDesktop: './assets/images/image-creme-brulee-desktop.jpg',
// 		imgThumbnail: './assets/images/image-creme-brulee-thumbnail.jpg',
// 		alt: 'Two dishes of crème brûlée topped with berries, figs and mint.'
// 	},
// 	{
// 		id: 'a8255a6b-87de-4947-a6ec-64169afecd49',
// 		name: 'Macaron',
// 		title: 'Macaron Mix of Five',
// 		price: 8.0,
// 		imgMobile: './assets/images/image-macaron-mobile.jpg',
// 		imgTablet: './assets/images/image-macaron-tablet.jpg',
// 		imgDesktop: './assets/images/image-macaron-desktop.jpg',
// 		imgThumbnail: './assets/images/image-macaron-thumbnail.jpg',
// 		alt: 'Five different flavour macarons.'
// 	},
// 	{
// 		id: '14701468-4f6d-49ed-9480-61be223028ac',
// 		name: 'Tiramisu',
// 		title: 'Classic Tiramisu',
// 		price: 5.5,
// 		imgMobile: './assets/images/image-tiramisu-mobile.jpg',
// 		imgTablet: './assets/images/image-tiramisu-tablet.jpg',
// 		imgDesktop: './assets/images/image-tiramisu-desktop.jpg',
// 		imgThumbnail: './assets/images/image-tiramisu-thumbnail.jpg',
// 		alt: 'A tiramisu topped with berries, mint and cocoa powder.'
// 	},
// 	{
// 		id: '67897043-ff0e-4273-81e9-fec5059dd42b',
// 		name: 'Baklava',
// 		title: 'Pistachio Baklava',
// 		price: 4.0,
// 		imgMobile: './assets/images/image-baklava-mobile.jpg',
// 		imgTablet: './assets/images/image-baklava-tablet.jpg',
// 		imgDesktop: './assets/images/image-baklava-desktop.jpg',
// 		imgThumbnail: './assets/images/image-baklava-thumbnail.jpg',
// 		alt: 'Three triangle-shaped baklavas topped with crushed pistachios.'
// 	},
// 	{
// 		id: 'e44fa461-4bbc-4cd6-974f-682e31eb692c',
// 		name: 'Pie',
// 		title: 'Lemon Meringue Pie',
// 		price: 5.0,
// 		imgMobile: './assets/images/image-meringue-mobile.jpg',
// 		imgTablet: './assets/images/image-meringue-tablet.jpg',
// 		imgDesktop: './assets/images/image-meringue-desktop.jpg',
// 		imgThumbnail: './assets/images/image-meringue-thumbnail.jpg',
// 		alt: 'A slice of lemon pie coronated with meringue.'
// 	},
// 	{
// 		id: '8ce98d56-f960-4804-ae34-6218fa3bf312',
// 		name: 'Cake',
// 		title: 'Red Velvet Cake',
// 		price: 4.5,
// 		imgMobile: './assets/images/image-cake-mobile.jpg',
// 		imgTablet: './assets/images/image-cake-tablet.jpg',
// 		imgDesktop: './assets/images/image-cake-desktop.jpg',
// 		imgThumbnail: './assets/images/image-cake-thumbnail.jpg',
// 		alt: 'Red velvet cake portion with sliced strawberries on the inside and a berry on top.'
// 	},
// 	{
// 		id: '824f63cd-633e-42b6-b43a-3558966d6376',
// 		name: 'Brownie',
// 		title: 'Salted Caramel Brownie',
// 		price: 5.5,
// 		imgMobile: './assets/images/image-brownie-mobile.jpg',
// 		imgTablet: './assets/images/image-brownie-tablet.jpg',
// 		imgDesktop: './assets/images/image-brownie-desktop.jpg',
// 		imgThumbnail: './assets/images/image-brownie-thumbnail.jpg',
// 		alt: 'A portion of brownie with vanilla ice cream and caramel syrup.'
// 	},
// 	{
// 		id: '17cbeca7-4958-4b48-81d5-1820c2d42c6d',
// 		name: 'Cotta',
// 		title: 'Vanilla Panna Cotta',
// 		price: 6.5,
// 		imgMobile: './assets/images/image-panna-cotta-mobile.jpg',
// 		imgTablet: './assets/images/image-panna-cotta-tablet.jpg',
// 		imgDesktop: './assets/images/image-panna-cotta-desktop.jpg',
// 		imgThumbnail: './assets/images/image-panna-cotta-thumbnail.jpg',
// 		alt: 'Two crystal jars of panna cotta with cream.'
// 	}
// ];

const createProduct = () => {
	const fragment = document.createDocumentFragment();

	allProducts.forEach(dessert => {
		//article del producto
		const article = document.createElement('article');
		article.classList.add('product');

		//div con img + boton
		const productMainDiv = document.createElement('div');
		productMainDiv.classList.add('product-main');

		//imagen
		const picture = document.createElement('picture');

		const sourceDesktop = document.createElement('source');
		sourceDesktop.media = '(min-width: 1200px)';
		sourceDesktop.srcset = './assets/images/desktop/image-waffle-desktop.jpg'; //y entonces de que sirve ponerl aen el objeto?
		picture.append(sourceDesktop);

		const sourceTablet = document.createElement('source');
		sourceTablet.media = '(min-width: 768px)';
		sourceTablet.srcset = './assets/images/desktop/image-waffle-tablet.jpg';
		picture.append(sourceTablet);

		const sourceMobile = document.createElement('source');
		sourceMobile.media = '(min-width: 360px)';
		sourceMobile.srcset = './assets/images/desktop/image-waffle-mobile.jpg';
		picture.append(sourceMobile);

		const imagePictureElement = document.createElement('source');
		imagePictureElement.classList.add('product-image"');
		imagePictureElement.src = './assets/images/image-brownie-mobile.jpg';
		picture.append(imagePictureElement);

		article.append(picture);

		fragment.append(article);
	});

	document.body.append(fragment);
};

createProduct();
