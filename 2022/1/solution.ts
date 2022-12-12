import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, './1.txt'), 'utf-8');

const parsedInput = input.split(' ')[0].split('\n\n').map(v => v.split('\n'));

console.log(sum(parsedInput.map(elf => {
    return elf.reduce((acc, val) => {
      return acc + Number(val);
    }, 0);
  }).sort().slice(-3)),
);

function sum(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val, 0);
}
