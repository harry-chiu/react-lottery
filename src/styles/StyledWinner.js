import styled, {
  css,
  keyframes,
} from 'styled-components';

const StyledWinner = {};

const zoom = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`;

const zoomAnimation = css`
  animation-name: ${zoom};
  animation-duration: 3s;
  animation-time-function: ease-in-out;
  animation-iteration-count: infinite;
`;

StyledWinner.Container = styled.div`
  display: ${props => props.hide ? 'none' : 'flex'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

StyledWinner.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

StyledWinner.Title = styled.h1`
  color: #ffc107;
  margin: 0;
  padding: 16px 0;
  font-size: 48px;
  letter-spacing: 4px;
  ${zoomAnimation};
`;

StyledWinner.AvatarWrapper = styled.div`
  padding: 24px 0;
`;

StyledWinner.ButtonWrapper = styled.div`
  text-align: center;
  padding: 32px 0;
`;

export default StyledWinner;
