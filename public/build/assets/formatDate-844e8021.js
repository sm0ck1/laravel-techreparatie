const r=t=>new Date(t).toLocaleDateString(),c=t=>{const e=new Date(t.split(".").reverse().join("-")),a=Math.abs(new Date-e);return Math.ceil(a/864e5)};export{c,r as d};
