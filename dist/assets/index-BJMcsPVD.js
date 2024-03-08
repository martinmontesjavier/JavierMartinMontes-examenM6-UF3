(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const v={template:'<p class="text-light">Javier Martin Montes</p>'},l=[{id:3,nombre:"Mahou Cinco Estrellas",tipo:"Lager",origen:"Madrid",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://www.loscervecistas.es/wp-content/uploads/2021/10/mahou-cinco-estrellas-213770.png"},{id:22,nombre:"Estrella Galicia",tipo:"Lager",origen:"Galicia",descripcion:"Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.",imagen:"https://www.crusat.com/wp-content/uploads/2021/07/estrella-galicia-especial.png"},{id:33,nombre:"Alhambra Reserva 1925",tipo:"Lager",origen:"Granada",descripcion:"Cerveza rubia con un sabor ligeramente dulce y toques de caramelo.",imagen:"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202204/04/00118602800916____3__600x600.jpg"},{id:34,nombre:"San Miguel Especial",tipo:"Lager",origen:"Barcelona",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://www.sanmiguel.com/es/wp-content/uploads/sites/2/2021/01/san-miguel-gluten-free-4.png"},{id:35,nombre:"Damm Estrella",tipo:"Lager",origen:"Barcelona",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://static.damm.com/sites/default/files/config-page/estrella_header_logo/estrella-damm_0.png"}],c={template:`<div class="container mt-3 p-5 border shadow-lg ">
<h1 class="text-center mb-5 ">----- Vista usuario -----</h1>
<div class="row">
  
  <div class="col-6">
  <form novalidate id="formulario">
    <h3>Grupo</h3>
    <label for="nombreGrupo" class="label-control">Nombre del grupo:</label>
    <input required minlength="4" maxlength="10" id="nombreGrupo" name="nombreGrupo" type="text" class="form-control mt-2" placeholder ="Borrachos de DAW2">
    <div class="invalid-feedback small">Minimo 4, Maximo 10 caracteres</div>
    <label for="mesa" class="label-control">Mesa numero</label>
    <input required min="1" max="15" id="mesa" name="mesa" type="number" class="form-control mt-2" placeholder ="1">
    <div class="invalid-feedback small">Minimo 1, Maximo 15</div>
  
    <h3 class="mt-5">Haz tu pedido</h3>
    <div class="d-flex gap-3 ">
      <select required name="cervezas" id="cervezas" class="form-control">
        <option value="">Selecciona qué birra quieres</option>
        <option value="">Estrella Galicia</option>
      </select>
      <div class="invalid-feedback small">Selecciona minimo 1</div>

      <input required id="cantidad" name="cantidad" type="number" min="1" value="1" class="form-control">
      <div class="invalid-feedback small">Minimo 1</div>
    </div>
    <button class="btn btn-success mt-4 w-100 btnAñadir">¡Enviar pedido!</button>
    </form>
  </div>
  <div class="col-6 border ">
    <div id="tarjeta" class="p-3 d-flex">
      <div class="w-50">
        <img src="estrella.jpg" alt="" class="w-100">
      </div>
      <div>
        <h4 class="">Estrella Galicia</h4>
        <p>Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.</p>
      </div>
    </div>
  </div>
</div>`,script:()=>{let o='<option value="">Selecciona una opción</option>';l.map(i=>{o+=`<option value="${i.id}">${i.nombre}</option>`}),document.querySelector("#cervezas").innerHTML=o,document.querySelector("#cervezas").addEventListener("change",()=>{let i=document.querySelector("#cervezas").value;console.log(i),l.forEach(n=>{if(n.id==i){let d=` 
                <div class="w-50">
                    <img src="${n.imagen}" alt="" class="w-100">
                </div>
                <div>
                    <h4 class="">${n.nombre}</h4>
                    <p>${n.descripcion}</p>
                </div>`;document.querySelector("#tarjeta").innerHTML=d}})})}};let s=[];const u={template:`<div id="tablaPedidos" class="container mt-5 mb-5 p-5 border shadow-lg ">
<div class="row">
  <h1 class="text-center mb-5 ">----- Vista camareros -----</h1>
<h3>Pedidos</h3>
<table id="tablaPedidos" class="table">
  <thead>
    <tr>
      <th>Id</th>
      <th>Grupo</th>
      <th>Mesa</th>
      <th>Cerveza</th>
      <th>Cantidad</th>
      <th>Estado</th>
    </tr>        
  </thead>
  <tbody id="filasCervezas">
    <tr>
      <td>1</td>
      <td>Borrachos de DAW2</td>
      <td>1</td>
      <td>Estrella Galicia</td>
      <td>3</td>
      <td>
        <div class="d-flex gap-2">
          <button class="btn btn-outline-warning w-100 btn-sm">Pedido pendiente...</button>
          <button class="btn btn-outline-danger w-100 btn-sm"> 🗑 Borrar pedido</button>
        </div>
        
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Cabezones contentos</td>
      <td>1</td>
      <td>Estrella DAM</td>
      <td>2</td>
      <td>
        <div class="d-flex gap-2">
          <button class="btn btn-outline-success w-100 btn-sm">¡Pedido servido!</button>
          <button class="btn btn-outline-danger w-100 btn-sm"> 🗑 Borrar pedido</button>
        </div>       
      </td>
    </tr>
  </tbody>
</table>
</div>

</div>`,script:()=>{o(s);function o(e){let t="";e.forEach((a,r)=>{a.estado=="Pendiente"?t+=`
                    <tr>
                        <td>${a.id}</td>
                        <td>${a.grupo}</td>
                        <td>${a.mesa}</td>
                        <td>${a.nombre}</td>
                        <td>${a.cantidad}</td>
                        <td>${a.estado}</td>
                        <td><button data-index="${a.id}" class="btn btn-outline-warning w-100 btn-sm resolverPedido">Pedido pendiente...</button></td>
                        <td>
                        <button data-index="${r}" class="btn btn-outline-danger w-100 btn-sm eliminar"> 🗑 Borrar pedido</button></td>
                    </tr>
                `:t+=`
                    <tr>
                        <td>${a.id}</td>
                        <td>${a.grupo}</td>
                        <td>${a.mesa}</td>
                        <td>${a.nombre}</td>
                        <td>${a.cantidad}</td>
                        <td>${a.estado}</td>
                        <td><button data-index="${a.id}" class="btn btn-outline-success w-100 btn-sm">¡Pedido servido!</button></td>
                        <td>
                        <button data-index="${r}" class="btn btn-outline-danger w-100 btn-sm eliminar"> 🗑 Borrar pedido</button></td>
                    </tr>
                `}),document.querySelector("#filasCervezas").innerHTML=t}function i(e,t){e.splice(t,1),o(e)}function n(e,t){e.forEach(a=>{a.id==t&&(console.log("id de la cerveza",a.id),a.estado="Resuelto")}),o(e)}function d(e){let t=document.querySelector("#nombreGrupo").value,a=document.querySelector("#cervezas").selectedIndex,r=document.querySelector("#cervezas").options[a].textContent,p=document.querySelector("#mesa").value,b=document.querySelector("#cantidad").value,g={id:e.length+1,grupo:t,mesa:p,nombre:r,cantidad:b,estado:"Pendiente"};e.push(g),o(e)}document.querySelector("body").addEventListener("click",e=>{if(e.preventDefault(),e.target.classList.contains("btnAñadir")){const t=document.querySelector("#formulario");t.checkValidity()?t.classList.add("was-validated"):(console.log(t),console.log("el formulario no valida")),t.classList.contains("was-validated")&&d(s)}if(e.target.classList.contains("eliminar")){let t=e.target.dataset.index;console.log("indice que mando Eliminar",t),i(s,t)}if(e.target.classList.contains("resolverPedido")){let t=e.target.dataset.index;console.log("indice que mando Resolver",t),n(s,t)}})}},m={template:`
    <div>
        <div id="pedido"></div>
        <div id="tablaPedido"></div>
    </div>
    `,script:()=>{document.querySelector("#pedido").innerHTML=c.template,document.querySelector("#tablaPedido").innerHTML=u.template,c.script(),u.script()}};document.querySelector("header").innerHTML=v.template;document.querySelector("main").innerHTML=m.template;m.script();
