import { playerConstants } from '../constants';

const {
  ADD_FAKE_PLAYER,
  CLEAR_FAKE_PLAYERS,
  SET_WINNER,
  CLEAR_WINNER,
} = playerConstants;

const initialState = {
  players: [],
  winner: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAKE_PLAYER:
      return { ...state, players: [...state.players, ...action.payload] };
    case CLEAR_FAKE_PLAYERS:
      return { ...state, players: [] };
    case SET_WINNER:
      return { ...state, winner: action.payload };
    case CLEAR_WINNER:
      return { ...state, winner: '' };
    default:
      return state;
  }
};