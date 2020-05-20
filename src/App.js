import React from 'react';
import Styled from './styles';
import Player from './containers/Player';
import Counter from './containers/Counter';
import Winner from './containers/Winner';

const App = () => {
  return (
    <Styled.Container>
      <Player />
      <Counter />
      <Winner />
    </Styled.Container>
  );
};

export default App;