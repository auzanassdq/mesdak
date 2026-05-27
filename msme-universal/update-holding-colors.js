const fs = require('fs');
const file = 'src/app/companies/holding-structure.tsx';
let content = fs.readFileSync(file, 'utf8');

const updates = [
  // continentalCompanies
  { search: 'color: "text-[#1769d8]",\\s*borderColor: "border-[#1769d8]",\\s*bgActive: "bg-[#1769d8]",', replace: 'color: "text-[#e86f28]",\n    borderColor: "border-[#e86f28]",\n    bgActive: "bg-[#e86f28]",', label: 'Network' },
  { search: 'color: "text-[#2f963f]",\\s*borderColor: "border-[#2f963f]",\\s*bgActive: "bg-[#2f963f]",', replace: 'color: "text-[#73bf43]",\n    borderColor: "border-[#73bf43]",\n    bgActive: "bg-[#73bf43]",', label: 'Butic' },
  { search: 'color: "text-[#5a3fa3]",\\s*borderColor: "border-[#5a3fa3]",\\s*bgActive: "bg-[#5a3fa3]",', replace: 'color: "text-[#0d9488]",\n    borderColor: "border-[#0d9488]",\n    bgActive: "bg-[#0d9488]",', label: 'Consulting' },
  { search: 'color: "text-[#f28a00]",\\s*borderColor: "border-[#f28a00]",\\s*bgActive: "bg-[#f28a00]",', replace: 'color: "text-[#d4af37]",\n    borderColor: "border-[#d4af37]",\n    bgActive: "bg-[#d4af37]",', label: 'Finance' },
  { search: 'color: "text-[#00939b]",\\s*borderColor: "border-[#00939b]",\\s*bgActive: "bg-[#00939b]",', replace: 'color: "text-[#4182C0]",\n    borderColor: "border-[#4182C0]",\n    bgActive: "bg-[#4182C0]",', label: 'IZITec' },
  { search: 'color: "text-[#dd2525]",\\s*borderColor: "border-[#dd2525]",\\s*bgActive: "bg-[#dd2525]",', replace: 'color: "text-[#30308E]",\n    borderColor: "border-[#30308E]",\n    bgActive: "bg-[#30308E]",', label: 'Media' },
  { search: 'color: "text-[#0f6b3a]",\\s*borderColor: "border-[#0f6b3a]",\\s*bgActive: "bg-[#0f6b3a]",', replace: 'color: "text-[#6b21a8]",\n    borderColor: "border-[#6b21a8]",\n    bgActive: "bg-[#6b21a8]",', label: 'DataTalk' }
];

updates.forEach(u => {
  const regex = new RegExp(u.search, 'g');
  content = content.replace(regex, u.replace);
});

fs.writeFileSync(file, content);
console.log('holding-structure.tsx colors updated');
