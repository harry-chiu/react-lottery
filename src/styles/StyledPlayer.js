import styled from 'styled-components';

const StyledPlayer = {};

StyledPlayer.Container = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  min-width: 200px;
  padding: 16px;
  border-radius: 15px;
  transition: 0.15s ease-in-out;

  @media (max-width: 768px) {
    top: 4px;
    right: 4px;
    padding: 8px;
    min-width: 160px;
  }
`;

StyledPlayer.PlayerTotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 8px;
`;

StyledPlayer.Text = styled.label`
  display: inline-block;
  margin: 0;
  font-weight: bold;
`;

StyledPlayer.Total = styled(StyledPlayer.Text)`
  margin-left: auto;
`;

StyledPlayer.LatestPlayerListContainer = styled.div`
  position: absolute;
`;

StyledPlayer.ListWrapper = styled.div`
  opacity: 0.7;
  max-width: 180px;

  @media (max-width: 768px) {
    max-width: 140px;
  }
`;

StyledPlayer.ViewAllButton = styled.button`
  display: inline-block;
  padding: 12px 0;
  width: 100%;
  color: #ffffff;
  background: inherit;
  border: none;
  transition: 0.15s ease-in-out;
  cursor: pointer;
  opacity: 0.7;
  text-align: center;

  &:hover {
    background: #333333;
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 8px 0;
  }
`;

StyledPlayer.AllPlayerListContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 8px;
  max-width: 240px;
  transform: translateX(${props => props.open ? '0' : '240px'});
  transition: 0.25s ease-in-out;
  background: #222222;
  height: 100%;
  overflow: auto;
`;

StyledPlayer.AllPlayerTitle = styled.p`
  margin: 0;
  padding: 16px 0;
  font-weight: bold;
`;

export default StyledPlayer;