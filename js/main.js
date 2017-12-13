	'use strict';

//MENU DESPLEGABLE

var buttonLegend = document.querySelectorAll('.openMenu');//creo un array de legends
var sectionForm = document.querySelectorAll('.boxfield');//creo un array de boxfields


for (var i = 0; i < sectionForm.length; i++) {
	buttonLegend[i].addEventListener("click", desplegarPlegar);
}

function desplegarPlegar(event) {
	// event.currentTarget muestra el fragmento de código sobre el que hago click
	var boxfieldContent = event.currentTarget.nextElementSibling;
 	// El modificador .nextElementSibling selecciona el hermano contiguo.

	console.log(boxfieldContent);

	boxfieldContent.classList.toggle('hidden');


	var iconLegend = event.currentTarget.getElementsByTagName('span');
	// Los spans del elemento seleccionado (legend) genera un array de spans que
	// contiene un elemento. Recorremos ese array con el for y le añadimos/quitamos la clase
	// btnMinus que sustituye el background del icono de la leyenda por el (-).
	for (var i = 0; i < iconLegend.length; i++) {
		iconLegend[i].classList.toggle('btnMinus');
	}
}

//Select years


var select = document.querySelectorAll('.years');

function list(firstyear, totalyears) {
	var options = '';
	for (var x = 0; x < totalyears; x++){
	options = options + '<option value="' + (firstyear + x) + '">'+(firstyear + x)+'</option>';
	}
	return options;
}
//Añadir años a los select
	for (var i = 0; i < select.length; i++){
		select[i].innerHTML=list(1950, 100);
	}

//Añadir meses a los selct
var select = document.querySelectorAll('.month');

for (var i = 0; i < select.length; i++){
	select[i].innerHTML=list(1, 12);
}


//Seleccionar estudios
var studyOptions = '';
studyOptions = studyOptions + '<option value="Seleccionar">Seleciona estudios</option>';
studyOptions = studyOptions + '<option value="Sin estudios">Sin estudios obligados</option>';
studyOptions = studyOptions + '<option value="Eso">ESO</option>';
studyOptions = studyOptions + '<option value="FPBasica">FP Básica</option>';
studyOptions = studyOptions + '<option value="FPMedia">FP Media</option>';
studyOptions = studyOptions + '<option value="FPSuperior">FP Superior</option>';
studyOptions = studyOptions + '<option value="Uni">Estudios universitarios</option>';
studyOptions = studyOptions + '<option value="Postgrado">Postgrado</option>';
studyOptions = studyOptions + '<option value="Estudios sin convalidar">Estudios sin convalidar</option>';

document.querySelector('.type-studies').innerHTML = studyOptions;

//Rellenar Barras Habilidades
var pb = document.querySelector('.progress-bar__item');

function archivo(evt) {
	var files = evt.target.files; // FileList object
	//Obtenemos la imagen del campo "file".
	for (var i = 0, f; f = files[i]; i++) {
		//Solo admitimos imágenes.
		if (!f.type.match('image.*')) {
			continue;
		}
		var reader = new FileReader();
		reader.onload = (function(theFile) {
			return function(e) {
				// Creamos la imagen.
				console.log("hola");
				document.querySelector(".prev-photo").innerHTML = ['<img class="thumb" width="120" height="120" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
			};
		})(f);
		reader.readAsDataURL(f);
	}
}

var picButton = document.querySelector('.picture');
picButton.addEventListener('change',archivo);

function addMoreEducation () {
	var moreEducation = '<ul class="prev-educationdetails"><li id="educationdetails-studies" class="prev-educationdetails-studies">Titulación: <span id="titulacion" class="prev-edu"></span></li><li id="educationdetails-type-studies" class="prev-educationdetails-type-studies">Tipo de estudios: <span id="tipo-estudios" class="prev-edu"></span></li><li id="educationdetails-centre" class="prev-educationdetails-centre">Centro de estudios: <span id="centro" class="prev-edu"></span></li><li class="prev-educationdetails-date"><ul class="prev-educationdate"><li id="educationdate-start" class="prev-educationdate-start">Año de inicio: <span id="año-inicio" class="prev-edu"></span></li><li id="educationdate-end" class="prev-educationdate-end">Año de finalización: <span id="año-fin" class="prev-edu"></span></li></ul></li><li id="educationdetails-description" class="prev-educationdetails-description">Descripción: <span id="descripcion-estudios" class="prev-edu"></span></li></ul>'
}
