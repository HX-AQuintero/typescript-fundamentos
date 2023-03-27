import _ from 'lodash';

const data = [
  {
    username: "Alejo",
    role: 'admin'
  },
  {
    username: 'Nico',
    role: 'seller'
  },
  {
    username: 'Pepe',
    role: 'seller'
  },
  {
    username: 'Maria',
    role: 'seller'
  },
  {
    username: 'Santiago',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);

