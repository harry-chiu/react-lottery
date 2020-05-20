import React, {
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import Styled from '../styles';
import StyledPlayer from '../styles/StyledPlayer';
import Modal from '../components/shared/Modal';
import PlayerTotal from '../components/Player/PlayerTotal';
import LatestPlayerList from '../components/Player/LatestPlayerList';
import AllPlayerList from '../components/Player/AllPlayerList';

const Player = () => {
  const { players } = useSelector(store => store.player);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const renderPlayers = players => players.map((player) => (
    <Styled.ListItem key={player.id}>
      <Styled.Avatar
        src={player.avatar}
        alt={player.name.slice(0, 1)}
      />
      <Styled.Text>
        {player.name}
      </Styled.Text>
    </Styled.ListItem>
  ));

  return (
    <StyledPlayer.Container>
      <PlayerTotal total={players.length} />
      <LatestPlayerList
        players={players}
        openModal={openModal}
        renderPlayers={renderPlayers}
      />
      <Modal
        open={open}
        setOpen={setOpen}
      >
        <AllPlayerList
          open={open}
          players={players}
          renderPlayers={renderPlayers}
        />
      </Modal>
    </StyledPlayer.Container>
  );
};

export default Player;