import React from 'react';
import StyledPlayer from '../../styles/StyledPlayer';
import { UsersIcon } from '../../icons';

const PlayerTotal = ({ total }) => {
  return (
    <StyledPlayer.PlayerTotalContainer>
      <UsersIcon size={24} />
      <StyledPlayer.Text>
        Players:
      </StyledPlayer.Text>
      <StyledPlayer.Total>
        {total}
      </StyledPlayer.Total>
    </StyledPlayer.PlayerTotalContainer>
  );
};

export default PlayerTotal;