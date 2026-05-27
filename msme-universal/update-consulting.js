const fs = require('fs');
const file = 'src/components/group-org-charts/ConsultingChart.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace themeClass and iconClass for all entities
content = content.replace(/themeClass: ".*?",/g, 'themeClass: "border-[#0d9488]/20 hover:border-[#0d9488]/40",');
content = content.replace(/iconClass: ".*?",/g, 'iconClass: "bg-[#0d9488]/10 text-[#0d9488]",');

fs.writeFileSync(file, content);
console.log('ConsultingChart updated');
