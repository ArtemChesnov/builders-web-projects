// import '../img/awesome_webpack_branding.png';
import '../styles/style.scss';

import { drawGallery } from './getGallery.js';
import items from './items.js';

const gallery = document.getElementById('gallery');
items.map((item) => gallery.appendChild(drawGallery(item)));
