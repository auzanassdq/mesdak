const fs = require('fs');
const content = fs.readFileSync('src/app/(group-companies)/group-companies.tsx', 'utf8');
const lines = content.split('\n');

const exportList = [
  { name: 'MSMEConsultingGlobalOrgChart', start: 0, file: 'ConsultingChart.tsx' },
  { name: 'MSMEFinanceOrgChart', start: 495, file: 'FinanceChart.tsx' },
  { name: 'MMediaOrgChart', start: 878, file: 'MediaChart.tsx' },
  { name: 'MDataTalkOrgChart', start: 1344, file: 'DataTalkChart.tsx' },
  { name: 'MSMENetworkOrgChart', start: 1626, file: 'NetworkChart.tsx' },
  { name: 'MButicOrgChart', start: 1990, file: 'ButicChart.tsx' },
  { name: 'MIZITecOrgChart', start: 2296, file: 'IZITecChart.tsx' }
];

for (let i = 0; i < exportList.length; i++) {
  const start = exportList[i].start;
  const end = i < exportList.length - 1 ? exportList[i + 1].start : lines.length;
  let chunkLines = lines.slice(start, end);
  
  // ensure React is imported
  const hasReact = chunkLines.some(l => l.includes('import React'));
  if (!hasReact) {
    chunkLines.unshift('import React from "react";\n');
  }

  // Write to file
  fs.writeFileSync('src/components/group-org-charts/' + exportList[i].file, chunkLines.join('\n'), 'utf8');
  console.log('Wrote ' + exportList[i].file);
}
