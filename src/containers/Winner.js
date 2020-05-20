import React from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import Styled from '../styles';
import StyledWinner from '../styles/StyledWinner';
import { playerActions } from '../actions';

const {
  clearWinner,
  clearFakePlayers,
} = playerActions;

const Winner = () => {
  const dispatch = useDispatch();
  const { winner } = useSelector(store => store.player);

  const resetAll = () => {
    dispatch(clearWinner());
    dispatch(clearFakePlayers());
  };

  return (
    <StyledWinner.Container hide={winner ? false : true}>
      <StyledWinner.Wrapper>
        <StyledWinner.Title>
          WINNER
        </StyledWinner.Title>

        <StyledWinner.AvatarWrapper>
          <Styled.Avatar
            size={200}
            src={winner.avatar}
          />
        </StyledWinner.AvatarWrapper>

        <Styled.Text size={32}>
          {winner.name}
        </Styled.Text>

        <StyledWinner.ButtonWrapper>
          <Styled.Button onClick={resetAll}>
            Reset
          </Styled.Button>
        </StyledWinner.ButtonWrapper>
      </StyledWinner.Wrapper>
    </StyledWinner.Container>
  );
};

export default Winner;