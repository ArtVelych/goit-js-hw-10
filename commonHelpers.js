import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as y,i as u}from"./assets/vendor-77e16229.js";const c=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),b=document.querySelector(".value[ data-days]"),g=document.querySelector(".value[ data-hours]"),p=document.querySelector(".value[ data-minutes]"),C=document.querySelector(".value[ data-seconds]");let a,n;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,dateFormat:"Y-m-d H:i",onClose(t){a=t[0],a<new Date?(u.error({message:"Please choose a date in the future",messageColor:"white",backgroundColor:"red",position:"topRight"}),clearInterval(n),n=null,e.disabled=!0,e.style.backgroundColor="#cfcfcf",e.style.color="#989898"):(e.disabled=!1,e.style.background="blue",e.style.color="white")}};y(c,v);e.disabled=!0;function s(t){return t.toString().padStart(2,"0")}function k(t){const i=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:m,minutes:f,seconds:h}}function S(){e.disabled=!0,e.style.backgroundColor="#cfcfcf",e.style.color="#989898",n=setInterval(()=>{const t=Date.now(),o=a-t;if(o<=0)clearInterval(n),n=null,l({days:0,hours:0,minutes:0,seconds:0}),u.success({message:"The countdown has reached zero.",messageColor:"white",backgroundColor:"#59a10d",position:"topRight"}),e.disabled=!0,c.disabled=!1,e.style.backgroundColor="#cfcfcf",e.style.color="#989898";else{const r=k(o);l(r)}},1e3)}function l({days:t,hours:o,minutes:r,seconds:d}){b.textContent=s(t),g.textContent=s(o),p.textContent=s(r),C.textContent=s(d)}e.addEventListener("click",()=>{e.disabled=!0,c.disabled=!0,S()});
//# sourceMappingURL=commonHelpers.js.map
