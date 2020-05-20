import { name } from 'faker';

export const isEmpty = value => value === '' ? true : false;

export const isPositive = value => value > 0 ? true : false;

export const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

export const removeLeadingZero = time => time.slice(0, 1) === '0' ? time.slice(1) : time;

export const withLeadingZero = time => time < 10 ? '0' + time : time;

export const selectAllText = event => event.target.select();

export const createFakePlayer = id => {
  const randomName = name.findName();
  const randomAvatar = `https://i.pravatar.cc/50?img=${getRandomNumber(1, 50)}`;

  return {
    id,
    name: randomName,
    avatar: randomAvatar,
  };
};
