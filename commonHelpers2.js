import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as o}from"./assets/vendor-77e16229.js";const m=document.querySelector(".form");m.addEventListener("submit",n);function n(t){t.preventDefault();const e=Number(document.querySelector('[name="delay"]').value),s=document.querySelector('[name="state"]:checked');new Promise((r,i)=>{setTimeout(()=>{s.value==="fulfilled"?r(e):i(e)},e)}).then(()=>{o.success({message:`Fulfilled promise in ${e}ms`,messageColor:"#FFF",backgroundColor:"#59A10D",position:"topRight"})}).catch(()=>{o.error({message:`Rejected promise in ${e}ms`,messageColor:"#FFF",backgroundColor:"#EF4040",position:"topRight"})})}
//# sourceMappingURL=commonHelpers2.js.map