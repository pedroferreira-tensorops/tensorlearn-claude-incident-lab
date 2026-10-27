export function evaluate(o){
 const violations=[];
 if(!o||typeof o.upstreamCallsPerSecond!=='number'||!Number.isFinite(o.upstreamCallsPerSecond)||o.upstreamCallsPerSecond<0||o.upstreamCallsPerSecond>50)violations.push('rate');
 if(o?.cacheEnabled!==true)violations.push('cache');
 if(o?.duplicateProposals!==0)violations.push('duplicates');
 if(o?.clinicalPayloadLogged!==false)violations.push('privacy');
 return {pass:violations.length===0,violations};
}
