const fs = require('fs');

const inserts = {
  'ButicChart.tsx': `const buticUnits: any[] = [{ title: "M'App Inc", icon: "📱", services: ["App Development"] }];`,
  'DataTalkChart.tsx': `const dataCompanies: any[] = [{ name: "Data Insight", description: "Analytics" }];`,
  'FinanceChart.tsx': `const financeCompanies: any[] = [{ name: "MFI Fund", description: "Investment" }];\nconst valueItems: any[] = [{ title: "Value", description: "Creation" }];`,
  'IZITecChart.tsx': `const izitecUnits: any[] = [{ title: "M'App Inc", icon: "📱", services: ["Mobile Apps"] }];`,
  'MediaChart.tsx': `const mediaCompanies: any[] = [{ name: "Media Network", description: "Broadcasting" }];\nconst focusItems: any[] = [{ title: "Reach", description: "Global" }];`,
  'NetworkChart.tsx': `const networkUnits: any[] = [{ title: "Global Net", icon: "🌐", services: ["Connectivity"] }];`
};

for (const [file, code] of Object.entries(inserts)) {
  const path = 'src/components/group-org-charts/' + file;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace('export default function', code + '\n\nexport default function');
  fs.writeFileSync(path, content, 'utf8');
}
console.log('Fixed constants');
