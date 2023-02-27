const prompt = require('prompt-sync');
const input = prompt();

let cssProperties = [];
let cssProperty;

do {
  cssProperty = input('Digite uma propriedade CSS:  ').toLowerCase();
  if (cssProperty != 'sair') {
    cssProperties.push(cssProperty);
    cssProperties.sort();
  } else {
    cssProperty = 'sair';
  }
} while (cssProperty != 'sair');
console.log('=========================================');
console.log('Propriedades CSS');

for (let i = 0; i < cssProperties.length; i++) {
  const property = cssProperties[i];
  console.log(` ${i + 1}- ${property}`);
}
