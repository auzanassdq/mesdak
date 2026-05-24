const fs = require('fs');

const pages = [
  { file: 'msme-finance/page.tsx', chart: 'FinanceChart' },
  { file: 'msme-media/page.tsx', chart: 'MediaChart' },
  { file: 'msme-datatalk/page.tsx', chart: 'DataTalkChart' },
  { file: 'msme-network/page.tsx', chart: 'NetworkChart' },
  { file: 'msme-butic/page.tsx', chart: 'ButicChart' },
  { file: 'msme-izitec/page.tsx', chart: 'IZITecChart' }
];

pages.forEach(p => {
  const path = 'src/app/(group-companies)/' + p.file;
  let content = fs.readFileSync(path, 'utf8');

  // Insert imports
  const importStatement = `import ${p.chart} from "@/components/group-org-charts/${p.chart}";\nimport OurReachSection from "@/components/group-org-charts/OurReachSection";\n`;
  
  // Find last import
  const lines = content.split('\n');
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImportIdx = i;
  }
  lines.splice(lastImportIdx + 1, 0, importStatement);
  content = lines.join('\n');

  // Insert sections before Footer or before the last closing div
  const sections = `\n      {/* Group Companies Section */}\n      <div id="companies">\n        <${p.chart} />\n      </div>\n\n      {/* Our Reach Section */}\n      <OurReachSection />\n`;
  
  if (content.includes('{/* Footer')) {
    content = content.replace('{/* Footer', sections + '\n      {/* Footer');
  } else if (content.includes('</main>')) {
    content = content.replace('</main>', sections + '\n    </main>');
  } else {
    // If no footer found, insert before the last </div>
    const lastDivIndex = content.lastIndexOf('</div>');
    content = content.slice(0, lastDivIndex) + sections + content.slice(lastDivIndex);
  }

  fs.writeFileSync(path, content, 'utf8');
  console.log('Updated ' + p.file);
});
