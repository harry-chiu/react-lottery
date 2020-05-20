import React from 'react';
import Styled from '../../styles';
import StyledCounter from '../../styles/StyledCounter';
import { selectAllText } from '../../helper';

const CountdownTimer = ({
  delay,
  minutes,
  seconds,
  minutesOnChange,
  secondsOnChange,
  toggleCountdownTimer,
}) => {
  // 切換按鈕輸入
  // 'Pause' or 'Start'
  const renderButtonText = () => delay ? 'Pause' : 'Start';

  return (
    <>
      <StyledCounter.TimeInputContainer>
        <StyledCounter.TimeInput
          value={minutes}
          onChange={minutesOnChange}
          onFocus={selectAllText}
          underline={delay ? false : true}
        />
        <StyledCounter.ColonSeparate>
          :
        </StyledCounter.ColonSeparate>
        <StyledCounter.TimeInput
          value={seconds}
          onChange={secondsOnChange}
          onFocus={selectAllText}
          underline={delay ? false : true}
        />
      </StyledCounter.TimeInputContainer>

      <StyledCounter.ButtonWrapper>
        <Styled.Button onClick={toggleCountdownTimer}>
          {renderButtonText()}
        </Styled.Button>
      </StyledCounter.ButtonWrapper>
    </>
  );
};

export default CountdownTimer;