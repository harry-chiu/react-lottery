import React from 'react';
import Styled from '../../styles';
import StyledPlayer from '../../styles/StyledPlayer';

const AllPlayerList = ({
  open,
  players,
  renderPlayers,
}) => {
  return (
    <StyledPlayer.AllPlayerListContainer open={open}>
      <StyledPlayer.AllPlayerTitle>
        {players.length} Players
      </StyledPlayer.AllPlayerTitle>
      <Styled.List>
        {renderPlayers(players)}
      </Styled.List>
    </StyledPlayer.AllPlayerListContainer>
  );
};

export default AllPlayerList;