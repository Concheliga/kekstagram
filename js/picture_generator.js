import { createPhotoDescription } from './create_photo_description.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('a');
const pictureFragment = document.createDocumentFragment();
const descriptionArray = Array.from({length : 10}, createPhotoDescription);

function createPicture() {
  descriptionArray.forEach(({url, description, likes, comments})=>{
    const picture = pictureTemplate.cloneNode(true);
    const pictureImg = picture.querySelector('img');
    pictureImg.src = url;
    pictureImg.alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    pictureFragment.append(picture);
  });

  picturesContainer.append(pictureFragment);
}

function deleteCreatedPicture(){
  pictureFragment.innerHTML = '';
}

export{createPicture, deleteCreatedPicture};
