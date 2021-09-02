import { User } from "../../entities/user";

const addFakeUser = (overrides: IObjectLiteral): User => {
  const user: User = {
    fname: "Oscar",
    lname: "Guerrero Lopez",
    address: "Avd de Logroño 112",
    city: "Madrid",
    country: "Spain",
    geoLocation: [-3.5812442820069346, 40.47009377828564],
    password: "Hola123",
    status: "active",
    email: "oscar@oscar.com",
    role: "user"
  };

  return {
    ...user,
    ...overrides
  };
};

const completeFakeUser = (overrides: IObjectLiteral): User => {
  const user: User = {
    id: "dc7a7005-d217-47da-8240-c5e059b73cd5",
    fname: "Oscar fake",
    lname: "Guerrero Lopez fake",
    address: "Avd de Logroño 112",
    city: "Madrid",
    country: "Spain",
    geoLocation: [-15.374264717925959, 28.002952746625933],
    password: "Hola123",
    status: "active",
    email: "oscar@oscar.com",
    role: "user"
  };

  return {
    ...user,
    ...overrides
  };
};

const completeFakeUserResult = (overrides: IObjectLiteral): IObjectLiteral => {
  const user = {
    id: "dc7a7005-d217-47da-8240-c5e059b73cd5",
    fname: "Oscar fake",
    lname: "Guerrero Lopez fake",
    address: "Avd de Logroño 112",
    city: "Madrid",
    country: "Spain",
    geoLocation: [-15.374264717925959, 28.002952746625933],
    status: "active",
    email: "oscar@oscar.com",
    role: "user"
  };

  return {
    ...user,
    ...overrides
  };
};

const completeFakeUsers = (): User[] => {
  const users: User[] = [
    {
      id: "dc7a7005-d217-47da-8240-c5e059b73cd5",
      fname: "Oscar fake",
      lname: "Guerrero Lopez fake",
      address: "Avd de Logroño 112",
      city: "Madrid",
      country: "Spain",
      geoLocation: [-15.374264717925959, 28.002952746625933],
      password: "Hola123",
      status: "active",
      email: "oscar@oscar.com",
      role: "user"
    },
    {
      id: "dc7a7005-d217-47da-8240-c5e059b73cd5",
      fname: "Oscar fake2",
      lname: "Guerrero Lopez fake2",
      address: "Avd de Logroño 112",
      city: "Madrid",
      country: "Spain",
      geoLocation: [-15.374264717925959, 28.002952746625933],
      password: "Hola123",
      status: "active",
      email: "oscar2@oscar.com",
      role: "user"
    },
    {
      id: "dc7a7005-d217-47da-8240-c5e059b73cd5",
      fname: "Oscar fake3",
      lname: "Guerrero Lopez fake3",
      address: "Avd de Logroño 112",
      city: "Madrid",
      country: "Spain",
      geoLocation: [-15.374264717925959, 28.002952746625933],
      password: "Hola123",
      status: "active",
      email: "oscar3@oscar.com",
      role: "user"
    }
  ];

  return users;
};

const completeFakeUsersResult = (): IObjectLiteral[] => {
  const users: IObjectLiteral[] = [
    {
      id: "dc7a7005-d217-47da-8240-c5e059b73cd5",
      fname: "Oscar fake",
      lname: "Guerrero Lopez fake",
      address: "Avd de Logroño 112",
      city: "Madrid",
      country: "Spain",
      geoLocation: [-15.374264717925959, 28.002952746625933],
      status: "active",
      email: "oscar@oscar.com",
      role: "user"
    },
    {
      id: "dc7a7005-d217-47da-8240-c5e059b73cd5",
      fname: "Oscar fake2",
      lname: "Guerrero Lopez fake2",
      address: "Avd de Logroño 112",
      city: "Madrid",
      country: "Spain",
      geoLocation: [-15.374264717925959, 28.002952746625933],
      status: "active",
      email: "oscar2@oscar.com",
      role: "user"
    },
    {
      id: "dc7a7005-d217-47da-8240-c5e059b73cd5",
      fname: "Oscar fake3",
      lname: "Guerrero Lopez fake3",
      address: "Avd de Logroño 112",
      city: "Madrid",
      country: "Spain",
      geoLocation: [-15.374264717925959, 28.002952746625933],
      status: "active",
      email: "oscar3@oscar.com",
      role: "user"
    }
  ];

  return users;
};
export {
  addFakeUser,
  completeFakeUser,
  completeFakeUserResult,
  completeFakeUsers,
  completeFakeUsersResult
};
