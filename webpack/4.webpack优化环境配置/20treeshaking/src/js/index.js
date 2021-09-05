import '../css/index.css';
import { muil } from './test';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

// eslint-disable-next-line
console.log(sum(2, 3, 4, 5, 6))
console.log('muil', muil(3, 6));
