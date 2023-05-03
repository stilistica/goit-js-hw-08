
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
const ul = document.querySelector(".gallery");
const imgMakup = createGalleryMarkup(galleryItems);

ul.insertAdjacentHTML('beforeend', imgMakup);

function createGalleryMarkup(gallery) {
	return gallery.map(({ preview, original, description }) => {
		return `
		<li class="gallery__item">
		<a class="gallery__link" href="${original}">
		<img src="${preview}" alt="${description}" data-source="${original}" class="gallery__image" />
		</a>
		</li>
		`
	}).join("");
} 

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});

console.log(galleryItems);
