import { atom } from 'recoil';

export const profileState = atom({
  key: 'profileState',
  default: {
    picture: 'https://pbs.twimg.com/media/F-Grz0cbUAEQRow.jpg',
    name: 'Snoopy',
    age: 18,
    location: 'India',
    followers: 40,
    likes: 800,
    photos: 34,
  },
});
