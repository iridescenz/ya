import { sum } from './modules/sum';
import './globalStyle/global.module.sass'

const root = document.querySelector('#root');
console.log(root)
if (root) {
  root.textContent = sum(6, -1).toString();
}

