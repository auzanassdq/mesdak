const fs = require('fs');
const file = 'src/app/companies/holding-structure.tsx';
let content = fs.readFileSync(file, 'utf8');

const colorMap = {
  '#1769d8': '#e86f28', // Network
  '#2f963f': '#73bf43', // Butic
  '#5a3fa3': '#0d9488', // Consulting
  '#f28a00': '#d4af37', // Finance
  '#00939b': '#4182C0', // IZITec
  '#dd2525': '#30308E', // Media
  '#0f6b3a': '#6b21a8'  // DataTalk
};

for (const [oldColor, newColor] of Object.entries(colorMap)) {
  const regex = new RegExp(oldColor, 'g');
  content = content.replace(regex, newColor);
}

fs.writeFileSync(file, content);
console.log('holding-structure.tsx colors updated');
