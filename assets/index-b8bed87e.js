(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div>
    <img id="gdz" style="display: none; position: relative" src="" width="95%" height="95%" alt="piska bobra"/>
    <br><br>
    <label for="glavat">Глава: </label>
    <input class="input-field col s6" type="text" id="glava" name="glava"><br><br>
    <label for="nomert">Номер задачи: </label>
    <input type="text" id="nomer" name="nomer"><br><br>
    <a class="waves-effect waves-light btn" onclick="showImg('glava', 'nomer')">Открыть</a>
  </div>
`;
