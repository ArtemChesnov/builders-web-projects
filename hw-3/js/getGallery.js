const ITEM_TYPE = { image: drawImage, audio: drawAudio, video: drawVideo };

function drawImage(item) {
  const imgEl = document.createElement('img');
  imgEl.classList = 'gallery__item-image';
  imgEl.src = item.resource;

  return imgEl;
}

function drawAudio(item) {
  const audioEl = document.createElement('audio');
  audioEl.classList = 'gallery__item-audio';
  audioEl.src = item.resource;
  audioEl.controls = true;

  return audioEl;
}

function drawVideo(item) {
  const videoEl = document.createElement('video');
  videoEl.classList = 'gallery__item-video';
  videoEl.src = item.resource;
  videoEl.controls = true;

  return videoEl;
}

export function drawGallery(item) {
  const itemEl = document.createElement('div');
  itemEl.classList = `gallery__item`;

  const resourceEl = ITEM_TYPE[item.type];

  const titleEl = document.createElement('h3');
  titleEl.classList = 'gallery__item-title';
  titleEl.textContent = item.title;

  itemEl.appendChild(resourceEl(item));
  itemEl.appendChild(titleEl);

  return itemEl;
}
