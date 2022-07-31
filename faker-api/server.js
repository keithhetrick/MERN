const express = require("express");
const app = express();
const port = 8000;

const { faker } = require("@faker-js/faker");

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});

const createUser = () => {
  return {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phone_number: faker.phone.number(),
    last_name: faker.name.lastName(),
    first_name: faker.name.firstName(),
    _id: faker.datatype.uuid(),
  };
};

const createCompany = () => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
};

app.get("/api/user/new", (req, res) => {
  const user = createUser();
  res.json(user);
});

app.get("/api/company/new", (req, res) => {
  const company = createCompany();
  res.json(company);
});

app.get("/api/user/company", (req, res) => {
  const user = createUser();
  const company = createCompany();
  const userCompany = {
    user: user,
    company: company,
  };
  res.json(userCompany);
});
