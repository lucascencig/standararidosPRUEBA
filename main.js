//MENU DESPLEGABLE PARA TODO

const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
  menu.classList.toggle('active');
  
  

const rutaActual = e.target.getAttribute('src');

  if(rutaActual == 'img/menuhambur.png'){
    e.target.setAttribute('src', 'img/cruzNegra.png');
    
  }else{
    e.target.setAttribute('src', 'img/menuhambur.png');
  }
});




//FILTRO DE BUSQUEDA

