/**
* Template Name: Delicious
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/delicious-free-restaurant-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero carousel indicators
   *
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });*/

  /**
   * Menu isotope and filter
   */
  window.addEventListener('load', () => {
    let menuContainer = select('.menu-container');
    if (menuContainer) {
      let menuIsotope = new Isotope(menuContainer, {
        itemSelector: '.menu-item',
        layoutMode: 'fitRows'
      });

      let menuFilters = select('#menu-flters li', true);

      on('click', '#menu-flters li', function(e) {
        e.preventDefault();
        menuFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        menuIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  new Swiper('.events-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

})();





window.onload = function() {
  localStorage.clear();
}

var contador=0;
const usuario = new Usuario();


function agregarUsuario() {

  var encontro = false;

  if(contador>=0) {
    if(campos.documento && campos.names && campos.email && campos.telefonou && 
      campos.direccion && campos.username && campos.pwd1 && existe.documento &&
      existe.email && existe.username){
      if(usuario.act == true) {
        actualizarUsuario(usuario.idAct);
        document.getElementById('btn-guardar').innerText = 'Guardar';
        document.getElementById('btn-cancelar').classList.add('btn-cancelar-activo');
        usuario.limpiarRegistro();
      } else {
          contador+=1;
          usuario.agregarUsuario(contador);
      }
      document.getElementById('error-mensaje').classList.remove('formulario-mensaje-activo');
      document.getElementById('mensaje-exito').classList.add('formulario-mensaje-exito-activo');
      setTimeout(() => {
        document.getElementById('mensaje-exito').classList.remove('formulario-mensaje-exito-activo');
      }, 5000);
  
    } else {
      document.getElementById('error-mensaje').classList.add('formulario-mensaje-activo');
    }
  }
}

function eliminarUsuario(id) {
  usuario.eliminarUsuario(id);
}

function actualizarUsuario(id) {
  usuario.actualizarUsuario(id);
  document.getElementById('btn-guardar').innerText = 'Actualizar';
  document.getElementById('btn-cancelar').classList.remove('btn-cancelar-activo');
  encontro = true;
}


const formulario = document.getElementById('form-registro');
const inputs = document.querySelectorAll('#form-registro input');

const expresiones = {
  documento: /^\d{7,13}$/,
  names: /^[a-zA-ZÀ-ÿ\s]{4,50}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefonou: /^\d{10,13}$/,
  direccion: /^[a-zA-Z0-9#-\s]{4,30}$/,
	username: /^[a-zA-Z0-9\_\-]{4,16}$/,
	pwd1: /^.{8,30}$/,
}

const campos = {
  documento: false,
	names: false,
  email: false,
  telefonou: false,
  direccion: false,
  username: false,
	pwd1: false
}

const existe = {
  documento: false,
  email: false,
  username: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "documento":
			validarCampo(expresiones.documento, e.target, 'documento');
      validarExistencia('documento');
		break;
		case "names":
			validarCampo(expresiones.names, e.target, 'names');
		break;
    case "email":
			validarCampo(expresiones.email, e.target, 'email');
      validarExistencia('email');
		break;
		case "telefonou":
			validarCampo(expresiones.telefonou, e.target, 'telefonou');
		break;
    case "direccion":
			validarCampo(expresiones.direccion, e.target, 'direccion');
		break;
    case "username":
			validarCampo(expresiones.username, e.target, 'username');
      validarExistencia('username');
		break;
		case "pwd1":
			validarCampo(expresiones.pwd1, e.target, 'pwd1');
			validarPassword2();
		break;
		case "pwd2":
			validarPassword2();
		break;
		
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`m-${campo}`).classList.remove('input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`m-${campo}`).classList.add('input-error-activo');
		campos[campo] = false;
	}
}

const validarExistencia = (opcion) => {
  if(usuario.buscar(opcion)){
		document.getElementById(`m-e-${opcion}`).classList.add('input-error-activo');
		existe[opcion] = false;
	} else {
		document.getElementById(`m-e-${opcion}`).classList.remove('input-error-activo');
		existe[opcion] = true;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('pwd1');
	const inputPassword2 = document.getElementById('pwd2');

	if(inputPassword1.value !== inputPassword2.value){
    document.getElementById(`m-pwd2`).classList.add('input-error-activo');
		campos['pwd1'] = false;
	} else {
    document.getElementById(`m-pwd2`).classList.remove('input-error-activo');
		campos['pwd1'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

function cancelar() {
  document.getElementById('documento').value = '';
  document.getElementById('names').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefonou').value = '';
  document.getElementById('direccion').value = '';
  document.getElementById('username').value = '';
  document.getElementById('pwd1').value = '';
  document.getElementById('pwd2').value = '';
  document.getElementById('btn-guardar').innerText = 'Guardar';
  document.getElementById('btn-cancelar').classList.add('btn-cancelar-activo');
  document.getElementById('error-mensaje').classList.remove('formulario-mensaje-activo');
  usuario.act = false;
  usuario.idAct = 0;
}


