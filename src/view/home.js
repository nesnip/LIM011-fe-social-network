import { signOutSubmit } from '../view-controller.js';

export default () => {
  const home = document.createElement('div');
  const divContent = `
    
        <nav>
        <ul>
        <li><a id="btn-profile">Profile</a></li>
        <li><a id="btn-home">Home</a></li>
        <li><a id="btn-cerrar">Cerrar sesion</a></li>
        </ul>
      </nav>
      <section>
      <figure>
       <div id="portada"> </div>
       <div id="info-usuario"> 
       <img src="https://image.flaticon.com/icons/png/512/149/149071.png" alt="" id="foto-usuario">
       </div>
      </figure>
      <main>
       <textarea rows="4" cols="50" placeholder="¿Que quieres compartir?" > </textarea> 
       <button id="btn-subir-img"> imagen </button>
       <button id="btn-compartir"> Compartir </button>
       </main>
       </section>
    `;
  home.innerHTML = divContent;

  const btnSignOut = home.querySelector('#btn-cerrar');
  btnSignOut.addEventListener('click', signOutSubmit);
  return home;
};
