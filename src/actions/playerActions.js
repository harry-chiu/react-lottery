import { playerConstants } from '../constants';
import {
  createFakePlayer,
  getRandomNumber,
} from '../helper';

const {
  ADD_FAKE_PLAYER,
  CLEAR_FAKE_PLAYERS,
  SET_WINNER,
  CLEAR_WINNER,
} = playerConstants;

let counter = 1;
const addFakePlayer = () => {
  const fakeUsers = [];
  const randomNumber = getRandomNumber(0, 10);

  for (let i = 0; i < randomNumber; i++) {
    fakeUsers.push(createFakePlayer(counter++));
  }

  return {
    type: ADD_FAKE_PLAYER,
    payload: fakeUsers,
  };
};

const clearFakePlayers = () => {
  return {
    type: CLEAR_FAKE_PLAYERS,
  }
};

const setWinner = players => {
  return {
    type: SET_WINNER,
    payload: players[getRandomNumber(0, players.length - 1)],
  };
};

const clearWinner = () => {
  return {
    type: CLEAR_WINNER,
  };
};

export default {
  addFakePlayer,
  clearFakePlayers,
  setWinner,
  clearWinner,
};