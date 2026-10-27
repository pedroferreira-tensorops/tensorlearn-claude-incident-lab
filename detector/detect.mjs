export function detect(history,current,policy){
 const invalid={band:'insufficient',mean:null,stddev:null,z:null};
 if(!Array.isArray(history)||history.length<policy.minSamples||[...history,current].some(x=>typeof x!=='number'||!Number.isFinite(x)||x<0))return invalid;
 const mean=history.reduce((a,b)=>a+b,0)/history.length;
 const stddev=Math.sqrt(history.reduce((sum,x)=>sum+(x-mean)**2,0)/history.length);
 if(stddev===0)return {band:current>mean?3:0,mean,stddev:0,z:current>mean?null:0};
 const z=(current-mean)/stddev;
 return {band:policy.thresholds.filter(x=>z>=x).length,mean,stddev,z};
}
