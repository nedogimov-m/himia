import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <img id="gdz" style="display: none; position: relative" src="" width="95%" height="95%" alt="piska bobra"/>
    <br><br>
    <label for="glavat">Глава: </label>
    <input class="input-field col s6" type="text" id="glava" name="glava"><br><br>
    <label for="nomert">Номер задачи: </label>
    <input type="text" id="nomer" name="nomer"><br><br>
    <a class="waves-effect waves-light btn" onclick="showImg('glava', 'nomer')">Открыть</a>
  </div>
`
