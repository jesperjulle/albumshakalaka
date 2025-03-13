(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function s(e,n,r,i){this.artist=e,this.album=n,this.year=r,this.rating=i}function d(e,n){let r=document.getElementById(n),i=document.createElement("tr");i.className="hover:bg-yellow-500 ",i.innerHTML=`
    <td class="p-2 text-black">${e.album}</td>
    <td>${e.artist}</td>
    <td>${e.year}</td>
    <td>${e.rating}</td>
  `,r.appendChild(i)}fetch("./albums.json").then(e=>e.json()).then(e=>{let n=[];for(let r=0;r<e.length;r++){const i=new s(e[r].artistName,e[r].albumName,e[r].productionYear,e[r].rating);n.push(i)}n.forEach(function(r){d(r,"album-table-body")})}).catch(e=>console.error("Fejl ved hentning af data:",e));document.getElementById("footer").addEventListener("click",function(){this.querySelector("p").textContent="To be continued"});
