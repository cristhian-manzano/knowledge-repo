require('dotenv').config();

const { Client } = require('@elastic/elasticsearch');

// If error, throw exception
const client = new Client({
  node: process.env.ELASTIC_NODE,
  auth: {
    username: process.env.ELASTIC_USERNAME,
    password: process.env.ELASTIC_PASSWORD,
  },
});

client
  .ping()
  .then((r) => console.log('Connected: ', r))
  .catch((e) => {
    console.log('Error: ', e);
  });

const run = async () => {
  const created = await client.index({
    index: 'test-data',
    document: {
      name: 'Cristhian Manzano',
      job: 'Developer',
      city: 'Guayaquil',
    },
  });

  console.log('Data created!: ', JSON.stringify(created, null, 2));
};

run().catch((e) => {
  console.log('Error: ', e);
});

module.exports = client;
