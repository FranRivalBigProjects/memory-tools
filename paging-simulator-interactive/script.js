const res=document.getElementById('res');
function run(){
let txt=(document.getElementById('input').value||'').toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('virtual')) out+='- Virtual memory mapping context\n';
if(txt.includes('page')) out+='- Paging system behavior\n';
if(txt.includes('heap')) out+='- Heap allocation patterns\n';
if(txt.includes('stack')) out+='- Stack frame usage\n';
if(txt.includes('fragment')) out+='- Fragmentation issue\n';

if(val){
  out+='- Metric: '+val+'\n';
}

out+='- Analyze memory usage, allocation, and efficiency\n';

res.innerText=out;
}