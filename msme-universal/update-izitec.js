const fs = require('fs');
const file = 'src/app/(group-companies)/msme-izitec/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Update GroupCompanyNavbar
content = content.replace(/<GroupCompanyNavbar logoSrc="\/izitec-logo.png" \/>/g, '<GroupCompanyNavbar logoSrc="/izitec-logo.png" themeColor="#4182C0" />');

// Dark blues
content = content.replace(/text-blue-(500|600|700)/g, 'text-[#4182C0]');
content = content.replace(/bg-blue-(500|600|700)/g, 'bg-[#4182C0]');
content = content.replace(/border-blue-(500|600|700)/g, 'border-[#4182C0]');

// Light blues
content = content.replace(/bg-blue-(50|100)/g, 'bg-[#4182C0]/10');
content = content.replace(/border-blue-(100|200)/g, 'border-[#4182C0]/20');

// Replace light texts but checking if they are on a dark background or white
// E.g. in footers or heroes. Let's just make them text-white/80 if they are blue-100 or 200
content = content.replace(/text-blue-(100|200)/g, 'text-white/80');
content = content.replace(/text-blue-(300|400)/g, 'text-[#4182C0]');

fs.writeFileSync(file, content);
console.log('izitec page.tsx colors updated');
