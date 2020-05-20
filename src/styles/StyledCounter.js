import styled from 'styled-components';

const StyledCounter = {};

StyledCounter.Container = styled.div`
  display: ${props => props.hide ? 'none' : 'block'};
  text-align: center;
`;

StyledCounter.Title = styled.h1`
  font-size: 36px;
  margin: 0;
`;

StyledCounter.TimeInputContainer = styled.div`
  padding: 32px 0;
`;

StyledCounter.ColonSeparate = styled.label`
  display: inline-block;
  font-size: 48px;
`;

StyledCounter.TimeInput = styled.input`
  display: inline-block;
  font-size: 48px;
  background: inherit;
  padding: 0 8px;
  border: none;
  box-shadow: ${props => props.underline ? '0 2px #999999' : 'unset'};
  width: calc(2ch + 16px);
  color: inherit;

  &:focus {
    outline: none;
  }
`;

StyledCounter.ButtonWrapper = styled.div`
  text-align: center;
  padding: 32px 0;
`;

export default StyledCounter;