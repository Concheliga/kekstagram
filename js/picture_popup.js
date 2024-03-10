import {createPicture, deleteCreatePicture} from './create_picture.js';
import {createCommentPicture} from './similar_comments.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikes = document.querySelector('.likes-count');
const bigPictureComments = document.querySelector('.comments-count');
const commentList = document.querySelector('.social__comments');
const descrition = document.querySelector('.social__caption');
const userModalCloseElement = bigPicture.querySelector('.big-picture__cancel');
const containerPictures = document.querySelector('.pictures');
createPicture(containerPictures);
const userModalOpenElement = containerPictures.querySelectorAll('.picture');

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeRenderingWindow();
  }
}


function openRenderingWindow(miniature) {
  bigPicture.classList.remove('hidden');

  bigPictureImg.src = miniature.querySelector('.picture__img').src;
  bigPictureLikes.textContent = miniature.querySelector('.picture__likes').textContent;
  bigPictureComments.textContent = miniature.querySelector('.picture__comments').textContent;
  descrition.textContent = miniature.querySelector('.picture__img').alt;
  commentList.innerHTML = '';
  createCommentPicture(commentList);

  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeRenderingWindow() {
  bigPicture.classList.add('hidden');
  deleteCreatePicture();

  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

userModalCloseElement.addEventListener('click', () => {
  closeRenderingWindow();
});

for (const miniature of userModalOpenElement) {
  miniature.addEventListener('click', () => {
    openRenderingWindow(miniature);
  });
}


