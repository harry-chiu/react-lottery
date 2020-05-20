import styled from 'styled-components';

const StyledWinner = {};

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
`;

StyledWinner.AvatarWrapper = styled.div`
  padding: 24px 0;
`;

StyledWinner.ButtonWrapper = styled.div`
  text-align: center;
  padding: 32px 0;
`;

export default StyledWinner;
