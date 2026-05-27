const fs = require('fs');
const file = 'src/components/group-org-charts/MediaChart.tsx';
let content = fs.readFileSync(file, 'utf8');

// The original root node block in MediaChart.tsx
const originalRoot = `<div className="bg-gradient-to-br from-[#1d4ed8] to-[#6b0b2b] text-white rounded-2xl shadow-xl p-8 w-[440px] flex flex-col items-center relative z-10 border-4 border-white">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 overflow-hidden border-4" style={{borderColor: '#1d4ed8'}}>
            <Image src="/logo/group-companies/media.png" alt="M'Media Logo" width={80} height={80} className="object-contain" />
          </div>
          <h1 className="text-2xl font-bold tracking-wide text-center">M’Media Inc</h1>
          <p className="text-rose-100 text-[11px] font-bold uppercase tracking-[0.2em] mt-2 text-center">Inspiring Ideas. Creating Impact.</p>
        </div>`;

const newRoot = `<div className="bg-[#30308E] text-white rounded-2xl shadow-xl p-8 w-[440px] flex flex-col items-center relative z-10 border-4 border-white">
            <Image src="/logo/group-companies/media.png" alt="M'Media Logo" width={400} height={400} className="object-contain" />
        </div>`;

content = content.replace(originalRoot, newRoot);
content = content.replace(/#1d4ed8/g, '#30308E');

fs.writeFileSync(file, content);
console.log('MediaChart.tsx updated');
