
window.onload = function() {

  $("#divContacto").show();
  $("#btnEviarCorreo").hide();
  $("#divMsjExito").hide();
};



function mostrarOcularBtnEnviarCorreos(){
  var btn = $("#btnEviarCorreo");
  if(form.valid()){
    btn.show();
  } else {
    btn.hide();
  } 
};

function validarForm() {
  
  if(form.valid()){
    enviarCorreos();
  } else {
  alert("Formulario no valido");
  } 

};

function enviarCorreos() {
  
    $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'z1muUOE5ZDGJ62ybeMLGeA',
      'message': {
        'from_email': 'noreply@xpertys.com.mx',
        'from_name': 'Xpertys',
        'to': [
            {
              'email': $('input[id="email"]').val(),
              'name': $('input[id="nombre"]').val(),
              'type': 'to'
            }
          ],
        'autotext': 'true',
        'subject': 'Gracias por su interés',
        'html': '<img src="http://xpertys.com.mx/assets/imagenes/logoXpertys.png" height="80px"><hr style="margin-top: 20px; margin-bottom: 20px; border: 0; border-top: 1px solid #eee;"><br><div style="font-family:"Trebuchet MS", sans-serif;"><span style="font-size:18px;">Estimado <span style="color: #cc1f49;"><strong>' + $('input[id="nombre"]').val() + '</strong></span>, agradecemos su mensaje.<br>En breve nuestra área de operaciones se pondrá en contacto con usted.</span></div><br><hr style="margin-top: 20px; margin-bottom: 20px; border: 0; border-top: 1px solid #eee;"><br><div style="margin-bottom: 20px; font-style: normal; line-height: 1.42857143;"><strong><span style="color: #4873b8;">Xpertys, S.A. de C.V.</span></strong><br>Av. Benito Juárez, Ext. 226 Int. 29<br>Los Cedros, Metepec, C.P. 52154<br>Estado de México, México<br>Teléfonos: <strong>PBX (+52) 01 722 7052481, (+52) 01 722 2773650</strong></div>'
      }
    }
   }) .success(function () {
        console.log ( 'Correo enviado al usuario' );
      })
      .error(function (data, status) {
        console.log ( 'Error '+ status);
      });

    $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'z1muUOE5ZDGJ62ybeMLGeA',
      'message': {
        'from_email': 'noreply@xpertys.com.mx',
        'from_name': 'Xpertys',
        'to': [
            {
              'email': 'roy.santos@xpertys.com.mx',
              'type': 'to'
            },
            {
              'email': 'israel.guzman@xpertys.com.mx',
              'type': 'to'
            }
          ],
        'autotext': 'true',
        'subject': 'Usuario interesado en Xpertys',
        'html': '<img src="http://xpertys.com.mx/assets/imagenes/logoXpertys.png" height="80px"><hr style="margin-top: 20px; margin-bottom: 20px; border: 0; border-top: 1px solid #eee;"><br><div style="font-family:"Trebuchet MS", sans-serif;"><span style="font-size:18px;">El siguiente usuario ha solicitado información de Xpertys:<br><br><table width="80%" border="0" cellpadding="0" cellspacing="0"><tr><td width="10%">&nbsp;</td><td width="12%" align="center" valign="middle"><img src="http://xpertys.com.mx/assets/imagenes/enviocorreo/nombre.png"></td><td width="78%" valign="middle"><span style="font-size:18px;">' + $('input[id="nombre"]').val() + '</span></td></tr><tr><td>&nbsp;</td><td align="center" valign="middle"><img src="http://xpertys.com.mx/assets/imagenes/enviocorreo/correo.png"></td><td valign="middle"><span style="font-size:18px;">'+ $('input[id="email"]').val() + '</span></td></tr><tr><td>&nbsp;</td><td align="center" valign="middle"><img src="http://xpertys.com.mx/assets/imagenes/enviocorreo/organizacion.png"></td><td valign="middle"><span style="font-size:18px;">'+ $('input[id="telefono"]').val() + '</span></td></tr><tr><td>&nbsp;</td><td align="center" valign="middle"><img src="http://xpertys.com.mx/assets/imagenes/enviocorreo/telefono.png"></td><td valign="middle"><span style="font-size:18px;">'+ $('input[id="organizacion"]').val() + '</span></td></tr><tr><td>&nbsp;</td><td align="center" valign="middle"><img src="http://xpertys.com.mx/assets/imagenes/enviocorreo/comentarios.png"></td><td valign="middle"><span style="font-size:18px;">'+ $('textarea[id="mensaje"]').val() + '</span></td></tr></table><span></div><br><br><hr style="margin-top: 20px; margin-bottom: 20px; border: 0; border-top: 1px solid #eee;"><br><div style="margin-bottom: 20px; font-style: normal; line-height: 1.42857143;"><strong><span style="color: #cc1f49;">Xpertys, S.A. de C.V.</span></strong><br>Av. Benito Juárez, Ext. 226 Int. 29<br> Los Cedros, Metepec, C.P. 52154<br> Estado de México, México<br><strong>Teléfonos: PBX (+52) 01 722 7052481, (+52) 01 722 2773650</strong></div>'
      }
    }
   }).success(function () {
        console.log ( 'Correo enviado los administradores' );
      })
      .error(function (data, status) {
        console.log ( 'Error '+ status);
      });
   
   vaciarFormulario();
   mostrarMensajeOk();
};

function vaciarFormulario() {
  var nombre = document.getElementById("nombre");
  nombre.value = "";
  var email = document.getElementById("email");
  email.value = "";
  var telefono = document.getElementById("telefono");
  telefono.value = "";
  var organizacion = document.getElementById("organizacion");
  organizacion.value = "";
  var mensaje = document.getElementById("mensaje");
  mensaje.value = "";
};

function mostrarMensajeOk() {
  $("#btnEviarCorreo").hide();
  $("#divMsjExito").show();
  setTimeout(function(){
    $("#divMsjExito").hide();
  }, 3000);
};

var fom;

$( document ).ready(function() {

  form = $("#formContacto");    

  $('form').validate({
    rules: {
      nombre: {
        minlength: 3,
        maxlength: 100,
        required: true
      },
      email: {
        required: true,
        maxlength: 60,
        email: true
      },
      telefono:{
        required: true,
        maxlength: 20,
        number: true
      },
      organizacion: {
        required: true,
        maxlength: 100
      },
      mensaje:{
        required: true,
        maxlength: 300
      }
    },
    
    highlight: function(element) {
      $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
      $(element).closest('.form-group').removeClass('has-error');
    },
    
    errorElement: 'span',
    errorClass: 'help-block',
    
    errorPlacement: function(error, element) {
      if(element.parent('.input-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });
});

function initialize() {

  var myCenter=new google.maps.LatLng(19.266455,-99.626581);
  var marker;

  setTimeout(function(){ 
    var mapProp = {
      center:myCenter,
      zoom:15,
      mapTypeId:google.maps.MapTypeId.ROADMAP
      };

    var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);

    var marker=new google.maps.Marker({
      position:myCenter,
      animation:google.maps.Animation.BOUNCE
      });

    marker.setMap(map);
  }, 1000);
};





