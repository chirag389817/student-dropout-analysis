import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar.jpeg`,
  name: faker.name.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample(['Pricipal', 'Clerk', 'Pricipal', 'HOD', 'Pricipal', 'Pricipal', 'HOD', 'Clerk', 'Pricipal', 'Clerk']),
}));

export default users;
