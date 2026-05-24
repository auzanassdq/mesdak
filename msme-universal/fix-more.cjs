const fs = require('fs');

let content = fs.readFileSync('src/app/companies/holding-structure.tsx', 'utf8');
content = content.replace('setSelectedRegions((current: any)', 'setSelectedRegions((current: Record<string, string>)');
fs.writeFileSync('src/app/companies/holding-structure.tsx', content, 'utf8');

let consulting = fs.readFileSync('src/components/group-org-charts/ConsultingChart.tsx', 'utf8');
const lines = consulting.split('\n');
const newLines = lines.filter((l, i) => {
  if (l.includes('import React from "react"') && i > 10) return false;
  return true;
});
// also fix type errors with any in map functions
let newContent = newLines.join('\n');
newContent = newContent.replace(/item\.theme/g, '(item as any).theme');
newContent = newContent.replace(/item\.functions/g, '(item as any).functions');

fs.writeFileSync('src/components/group-org-charts/ConsultingChart.tsx', newContent, 'utf8');
console.log('Fixed consulting and holding-structure');
