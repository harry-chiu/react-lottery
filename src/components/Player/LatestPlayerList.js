import React from 'react';
import Styled from '../../styles';
import StyledPlayer from '../../styles/StyledPlayer';

const LatestPlayerList = ({
  players,
  openModal,
  renderPlayers,
}) => {
  const renderListItems = () => players.length > 3
    ? renderPlayers(players.slice(players.length - 3)) // 渲染最後 3 位 Player
    : renderPlayers(players);
  
  const renderViewAllButton = () => players.length > 3 && (
    <StyledPlayer.ViewAllButton onClick={openModal}>
      View All
    </StyledPlayer.ViewAllButton>
  );

  return (
    <StyledPlayer.LatestPlayerListContainer>
      <StyledPlayer.ListWrapper>
        <Styled.List>
          {renderListItems()}
        </Styled.List>
      </StyledPlayer.ListWrapper>
      {renderViewAllButton()}
    </StyledPlayer.LatestPlayerListContainer>
  );
};

export default LatestPlayerList;