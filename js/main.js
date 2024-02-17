const arrayOfSentences = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];
const names = ['Maks', 'Bob', 'Jack', 'Mary', 'Kate'];

function getRandomNumber(min, max){
  return Math.round(Math.random() * (max - min) + min);
}

let comment = () => ({
  id: getId(1, 1000000),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomString(arrayOfSentences),
  name: getRandomString(names)
});

function getRandomString(array){
  return array[getRandomNumber(0, array.length - 1)];
}

function getId(min, max){
  let previousId = [];
  while (previousId.length - 1 < max - min){
    let id = getRandomNumber(min, max);
    if (previousId.includes(id)){continue;}
    previousId.push(id);
    return id;
  }
  return 'alert';
}

function getPhotoDescription () {
  return{
    id: getId(1, 25),
    url: `photos/${getId(1, 25)}.jpg`,
    description: 'description',
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(0, 30)}, comment)
  };
}

let photoDescription =  getPhotoDescription;

let photoDescriptionArray = Array.from({length: 25}, photoDescription);
