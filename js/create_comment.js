import {getCommentID, getRandomNumber, getRandomRepeatableElementArray} from './utils.js';
import {NAMES, MESSAGES} from './constants.js';

const createComment = function() {
  return {
    id: getCommentID(),
    avatar: `img/avatar-${  getRandomNumber(1, 6)  }.svg`,
    message: getRandomRepeatableElementArray(MESSAGES),
    name: getRandomRepeatableElementArray(NAMES),
    likes: getRandomNumber(15, 200)
  };
};

export {createComment};
