import { atom } from 'recoil';

export const sideState = atom({
  key: 'sideOpened',
  default: false,
});
