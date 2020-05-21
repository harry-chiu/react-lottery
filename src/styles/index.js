import styled from 'styled-components';

const Styled = {};

Styled.Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ffffff;
  background: linear-gradient(135deg, #333333, #000000);
`;

Styled.Icon = styled.i`
  font-size: ${props => `${props.size}px` || 'unset'};

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

Styled.List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

Styled.ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  transition: 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #ffffff0e;
  }

  @media (max-width: 768px) {
    padding: 4px;
  }
`;

Styled.Avatar = styled.img`
  min-width: ${props => props.size ? `${props.size}px` : '32px'};
  height: ${props => props.size ? `${props.size}px` : '32px'};
  border-radius: 50%;
  background: #cccccc90;
  object-fit: cover;

  @media (max-width: 768px) {
    min-width: ${props => props.size ? `${props.size}px` : '24px'};
    height: ${props => props.size ? `${props.size}px` : '24px'};
  }
`;

Styled.Text = styled.p`
  display: inline-block;
  margin: 0;
  padding: 0 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${props => props.size ? `${props.size}px` : 'unset'};

  @media (max-width: 768px) {
    font-size: ${props => props.size ? `${props.size}px` : '0.8rem'};
  }
`;

Styled.Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  transform: translateX(${props => props.open ? '0' : '100%'});
  z-index: ${props => props.open ? '9' : '-1'};
  background: #000000aa;
`;

Styled.Button = styled.button`
  display: inline-block;
  padding: 12px 36px;
  border-radius: 16px;
  border: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  background: linear-gradient(135deg, #cc9cdfdd, #745bc6dd);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background: linear-gradient(135deg, #cc9cdfff, #745bc6ff);
  }
`;

export default Styled;