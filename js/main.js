
$(document).ready(function(){
 console.log('cargado')
// Slider
if(window.location.href.indexOf('home')>-1){
  $(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth:1200,
      Responsive: true
    },);
  });
}
   
// Menu despegable 
    $('#btnMenu').click(function(){
        
        $('nav ul').slideToggle()
        console.log('click')
    })
// Post
if(window.location.href.indexOf('home')>-1){

      let articulo =$('#articulo')
      let posts=[
        {
          title :'Cambiar Cards',
          imagen: 'https://jean96rq.github.io/portafolio-jean-2020/img/proyecto-6.PNG',
          fecha : moment().format('LLL'),
          description : `Lorem fistrum condemor llevame al sircoo benemeritaar
          no puedor te va a hasé pupitaa torpedo no te digo trigo
          por no llamarte Rodrigor no te digo trigo por no llamarte
          Rodrigor. Pupita no te digo trigo por no llamarte Rodrigor
          a gramenawer a gramenawer te va a hasé pupitaa qué dise
          usteer diodeno la caidita caballo blanco caballo negroorl
          llevame al sircoo.`,
          url :'https://jean96rq.github.io/proyectosJS/cambiar-cards/index.html'
        },
        {
          title :'Crea una notificación',
          imagen: 'https://jean96rq.github.io/portafolio-jean-2020/img/proyecto-7.PNG',
          fecha : moment().format('LLL'),
          description : `Lorem fistrum condemor llevame al sircoo benemeritaar
          no puedor te va a trigo por no llamarte
          Rodrigor. Pupita no te digo trigo por no llamarte Rodrigor
          a gramenawer a gramenawer te va a hasé pupitaa qué dise
          usteer diodeno la caidita caballo blanco caballo negroorl
          llevame al sircoo.`,
          url :'https://jean96rq.github.io/proyectosJS/notas/index.html'
        },
        {
          title :'Background rgba aleatorio',
          imagen: 'https://jean96rq.github.io/portafolio-jean-2020/img/proyecto-1.PNG',
          fecha : moment().format('LLL'),
          description : `Lorem fistrum condemor llevame al sircoo benemeritaar
          no puedor te va a hasé pupitaa torpedo no te digo trigo
          por no llamarte Rodrigor no te digo trigo por no llamarte
          Rodrigor.`,
          url :'https://jean96rq.github.io/proyectosJS/cambiarFondo/index.html'
        },
        {
          title :'Contador',
          imagen: 'https://jean96rq.github.io/portafolio-jean-2020/img/proyecto-2.PNG',
          fecha : moment().format('LLL'),
          description : `Lorem fistrum condemor llevame al sircoo benemeritaar
          no puedor te va a hasé pupitaa torpedo no te digo trigo
          por no llamarte Rodrigor no te digo trigo por no llamarte
          Rodrigor. Lorem fistrum condemor llevame al sircoo benemeritaar
          no puedor te va a hasé pupitaa torpedo no te digo trigo`,
          url :'https://jean96rq.github.io/proyectosJS/cambiarNumeros/index.html'
        },
      ]

      posts.forEach((post,index)=>{
        var bloquePost=`
        <article class="post">
        <h2 id="titulo">${post.title}<span>${post.fecha}</span></h2>
        <img src="${post.imagen}">
        <p>${post.description}</p>
        <a target="_blank" href="${post.url}" class="button-js">Ver más</a>
        </article> `;
        articulo.append(bloquePost)
      })
    }
// Selector de tema

        let temaOscuro=$('#temaOscuro')
      $('#oscuro').click(function(){
        temaOscuro.attr('href','css/fondoOscuro.css')
      })
      $('#claro').click(function(){
        temaOscuro.attr('href','')
      })

// Scroll ir arriba
      $('.subir').click(function(e){
          e.preventDefault()
          $('html, body').animate({
            scrollTop: 0
          },600)
      })
//login falso
      var formularioLogin=$('#formLogin')
      formularioLogin.submit(function(){
        let nombre=$('#name').val()
        let correo=$('#correo').val()
        let contraseña=$('#contraseña').val()

        
        localStorage.setItem('nombres',nombre)
        localStorage.setItem('correo', correo)
        localStorage.setItem('Contraseña',contraseña)
        
      })
      var about=$('#about p')
      var getNombre=localStorage.getItem('nombres')
      if(getNombre != null && getNombre != 'undefined'){
        $('#login').hide()
        about.html("Bienvenido, "+getNombre+"<br><br><br>")
        about.append("<a href='#' class='button-js' id='cerrarSesion'>Cerrar sesión</a>")
        
        $('#cerrarSesion').click(function(){
          localStorage.clear()
          $(this).hide()
          $('#login').show();
          location.reload();
        })
      }
// Acordeon
if(window.location.href.indexOf('sobreMi')>-1){
    $('#acordeon').accordion()
}
// Reloj
if(window.location.href.indexOf('reloj')>-1){
  setInterval(function(){
    var reloj=moment().format('LTS')
    $('#textoReloj').html(reloj)
  },1000)
}
// Validacion formulario
if(window.location.href.indexOf('contacto')>-1){
  $("form input[name='date']").datepicker({
    dateFormat :'dd-mm-yy'
  })
  $.validate({
    lang:'es'
  })
}
})

