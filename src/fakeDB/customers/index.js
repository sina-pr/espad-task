import {
  CUSTOMERS_LIST,
  SINGLE_CUSTOMER,
  UPDATE_CUSTOMER,
  VERIFY_CUSTOMER,
} from '../../configs/constantApi';
import mock from '../mock';
import { NEW_CUSTOMER } from '../../configs/constantUrl';

const data = [
  {
    id: 4980011111,
    firstName: 'John',
    lastName: 'Stewart',
    mobile: '4980011111',
    birthDate: '1991/01/13',
    address: 'No. 58 Goldensmith St,London,U.K',
    profilePic: 'pic1',
    verified: false,
  },
  {
    id: 4980011112,
    firstName: 'Jack',
    lastName: 'Stewart',
    birthDate: '1991/01/13',
    profilePic: 'pic2',
    verified: false,
  },
  {
    id: 4980011113,
    firstName: 'Natalia',
    lastName: 'Gomez',
    birthDate: '1986/06/06',
    profilePic: 'pic3',
    verified: true,
  },
];
mock.onGet(CUSTOMERS_LIST).reply(200, data);

mock.onGet(SINGLE_CUSTOMER).reply((config) => {
  console.log(config);
  const { id } = config;
  const user = data.find((i) => i.id === +id);

  return [200, user];
});

mock.onPost(NEW_CUSTOMER).reply((config) => {
  const lastData = data[data.length - 1];
  const lastProfilePicId = +lastData.profilePic.match(/\d+/);
  const { id, firstName, lastName, address, birthDate, mobile } =
    config.userData;
  const newData = {
    id: +id,
    firstName,
    lastName,
    address,
    birthDate,
    mobile,
    profilePic: `pic${
      lastProfilePicId < 10
        ? lastProfilePicId + 1
        : Math.round(Math.random() * 9)
    }`,
  };
  data.push(newData);
  return [200, newData];
});
mock.onPost(UPDATE_CUSTOMER).reply((config) => {
  console.log(config);
  const { id, userData } = config;
  const userIndex = data.findIndex((i) => i.id === +id);
  console.log(userIndex);
  data[userIndex] = {
    id: +id,
    firstName: userData.firstName,
    lastName: userData.lastName,
    mobile: userData.mobile,
    profilePic: userData.profilePic,
    address: userData.address,
    birthDate: userData.birthDate,
    verified: userData.verified,
  };
  return [201];
});

mock.onPost(VERIFY_CUSTOMER).reply((config) => {
  console.log(config);
  const { id } = config;
  const userIndex = data.findIndex((i) => i.id === +id);
  console.log(userIndex);
  data[userIndex] = {
    ...data[userIndex],
    verified: true,
  };
  return [201];
});
