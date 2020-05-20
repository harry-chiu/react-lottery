import React, {
  useState,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  isEmpty,
  isPositive,
  withLeadingZero,
  removeLeadingZero,
} from '../helper';
import { useInterval } from '../hooks';
import { playerActions } from '../actions';
import StyledCounter from '../styles/StyledCounter';
import CounterTitle from '../components/Counter/CounterTitle';
import CountdownTimer from '../components/Counter/CountdownTimer';

const {
  addFakePlayer,
  setWinner,
} = playerActions;

const Counter = () => {
  const {
    players,
    winner,
  } = useSelector(store => store.player);
  const dispatch = useDispatch();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [delay, setDelay] = useState(null);

  // '分' 輸入的檢查
  // '分' 最高上限為 60 分
  const handleMinutesChange = event => {
    let { value } = event.target;
    value = removeLeadingZero(value);
    value = isEmpty(value) ? setMinutes(0) : parseInt(value, 10);

    if (isPositive(value)) {
      if (value > 60) {
        setMinutes(60);
        setSeconds(0);
      } else {
        setMinutes(value);
      }
    }
  };

  // '秒' 輸入的檢查
  // '秒' 最高上限為 59 秒
  const handleSecondsChange = event => {
    let { value } = event.target;
    value = removeLeadingZero(value);
    value = isEmpty(value) ? setSeconds(0) : parseInt(value, 10);

    if (minutes >= 60) {
      setSeconds(0);
      return;
    }

    if (isPositive(value)) {
      if (value >= 60) {
        setSeconds(59);
      } else {
        setSeconds(value);
      }
    }
  };

  // 開始或暫停倒數計時器
  // 必須設定 '分' 或 '秒'
  const toggleCountdownTimer = () => {
    if (minutes === 0 && seconds === 0) {
      alert('You have to setting countdown time');
      return;
    }

    if (delay) {
      setDelay(null);
    } else {
      setDelay(1000);
    }
  };

  // 倒數計時器的 callback
  // 這裡主要設定了抽獎的條件
  // '分' 和 '秒' 同時為 0 時
  // 由所有 Player 中挑選出一位中獎者

  const countdown = () => {
    dispatch(addFakePlayer());

    if (seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    }

    if (seconds > 0) {
      setSeconds(seconds - 1);

      if (minutes === 0 && seconds - 1 === 0) {
        setDelay(null);
        dispatch(setWinner(players));
        return;
      }
    }
  };

  // 倒數計時器
  // useInterval(callback, delay)
  // delay 為 null 時暫停計時器
  useInterval(countdown, delay);

  return (
    <StyledCounter.Container hide={winner ? true : false}>
      <CounterTitle />
      <CountdownTimer
        delay={delay}
        minutes={withLeadingZero(minutes)}
        seconds={withLeadingZero(seconds)}
        minutesOnChange={handleMinutesChange}
        secondsOnChange={handleSecondsChange}
        toggleCountdownTimer={toggleCountdownTimer}
      />
    </StyledCounter.Container>
  );
};

export default Counter;