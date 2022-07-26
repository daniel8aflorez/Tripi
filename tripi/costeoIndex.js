//Selección de Origen y Destino 

//Origen 
const origenUser = document.querySelector('#Origen');
var mensajeVuelos2 = document.getElementById("MensajeVuelos2");

origenUser.addEventListener('change',() =>{
    let indexOrigen = origenUser.selectedIndex;

    if(indexOrigen == 0) {
        mensajeVuelos2.innerHTML = "Por favor seleccione un origen valido";
           
    } else if (indexOrigen == 1) {
        mensajeVuelos2.innerHTML = "Su origen es Bogotá";

    } else if (indexOrigen == 2) {
        mensajeVuelos2.innerHTML = "Su origen es Medellín";

    } else {
        mensajeVuelos2.innerHTML = "Su origen es Cali"; 
    }
   
});

//Destino 
const destinoUSer = document.querySelector('#Destino');
var mensajeVuelos3 = document.getElementById("MensajeVuelos3");

destinoUSer.addEventListener('change',() =>{
    let indexDestino = destinoUSer.selectedIndex;

    if(indexDestino == 0) {
         mensajeVuelos3.innerHTML = "Por favor seleccione un destino valido";
    
    } else if (indexDestino == 1) {
        mensajeVuelos3.innerHTML = "Su destino es San Andrés";

    } else if (indexDestino == 2) {
        mensajeVuelos3.innerHTML = "Su destino es Cartagena";

    } else {
        mensajeVuelos3.innerHTML = "Su destino es Santa Marta"; 
    }
   
});
console.log(destinoUSer);

//Calculo de la ruta 

const calculoRuta = document.querySelector(".origen");
const calculoRuta2 = document.querySelector(".destino");
var input = parseInt(document.getElementById("inputNumber").value);
var mensajeVuelos4 = document.getElementById("MensajeVuelos4");
var mensajeVuelos7 = document.getElementById("MensajeVuelos7");
var mensajeVuelos8 = document.getElementById("MensajeVuelos7");
var mensajeVuelos13 = document.getElementById("MensajeVuelos13");
var MensajeVuelos15 = document.getElementById("MensajeVuelos15");

calculoRuta.addEventListener, calculoRuta2.addEventListener('change',() =>{
    let indexOrigen1 = calculoRuta.selectedIndex;
    let indexdestino1 = calculoRuta2.selectedIndex;

    
    var Bogotá = 100;
    var Medellín = 200;
    var Cali = 300;
    var SanAndres = 600;
    var Cartagena = 500;
    var SantaMarta = 400;

    const input = parseInt(document.getElementById("inputNumber").value);

    var transporteADZ = 30;
    var transporteCTG = 40;
    var transporteSMR = 50;

    

    if(indexOrigen1 == 1 && indexdestino1 == 1){
        mensajeVuelos4.innerHTML = "El costo de esta ruta es $" + ((Bogotá + SanAndres)* input) + " para " + input + " personas";
        mensajeVuelos7.innerHTML = "Cada Traslado ida y regreso tiene un costo por persona de $" + transporteADZ;
        mensajeVuelos8.innerHTML = "El valor total de los traslados es $" + (transporteADZ * input);
        mensajeVuelos13.innerHTML = "$" + ((Bogotá + SanAndres)* input);
        MensajeVuelos15.innerHTML = "$" + (transporteADZ * input);
    } else if (indexOrigen1 == 1 && indexdestino1 == 2){
        mensajeVuelos4.innerHTML = "El costo de esta ruta es $" + ((Bogotá + Cartagena)*input) + " para " + input + " personas"; 
        mensajeVuelos7.innerHTML = "Cada Traslado ida y regreso tiene un costo por persona de $" + (transporteADZ);
        mensajeVuelos8.innerHTML = "El valor total de los traslados es $" + (transporteADZ * input);
        mensajeVuelos13.innerHTML = "$" + ((Bogotá + Cartagena)*input);
        MensajeVuelos15.innerHTML = "$" + (transporteADZ * input);
    } else if  (indexOrigen1 == 1 && indexdestino1 == 3){
        mensajeVuelos4.innerHTML = "El costo de esta ruta es $" + ((Bogotá + SantaMarta)* input) + " para " + input + " personas"; 
        mensajeVuelos7.innerHTML = "Cada Traslado ida y regreso tiene un costo por persona de $" + (transporteADZ);
        mensajeVuelos8.innerHTML = "El valor total de los traslados es $" + (transporteADZ * input);
        mensajeVuelos13.innerHTML = "$" + ((Bogotá + SantaMarta)* input);
        MensajeVuelos15.innerHTML = "$" + (transporteADZ * input);
    } else if (indexOrigen1 == 2 && indexdestino1 == 1){
        mensajeVuelos4.innerHTML = "El costo de esta ruta es $" + ((Medellín + SanAndres)*input) + " para " + input + " personas";
        mensajeVuelos7.innerHTML = "Cada Traslado ida y regreso tiene un costo por persona de $" + (transporteCTG);
        mensajeVuelos8.innerHTML = "El valor total de los traslados es $" + (transporteCTG * input);
        mensajeVuelos13.innerHTML = "$" + ((Medellín + SanAndres)*input);
        MensajeVuelos15.innerHTML = "$" + (transporteCTG * input);
    } else if (indexOrigen1 == 2 && indexdestino1 == 2){
        mensajeVuelos4.innerHTML = "El costo de esta ruta es $" + ((Medellín + Cartagena)* input) + " para " + input + " personas";
        mensajeVuelos7.innerHTML = "Cada Traslado ida y regreso tiene un costo por persona de $" + (transporteCTG);
        mensajeVuelos8.innerHTML = "El valor total de los traslados es $" + (transporteCTG * input);
        mensajeVuelos13.innerHTML = "$" + ((Medellín + SanAndres)*input);
        MensajeVuelos15.innerHTML = "$" + (transporteCTG * input);
    } else if (indexOrigen1 == 2 && indexdestino1 == 3){
        mensajeVuelos4.innerHTML = "El costo de esta ruta es $" + ((Medellín + SantaMarta)* input) + " para " + input + " personas";
        mensajeVuelos7.innerHTML = "Cada Traslado ida y regreso tiene un costo por persona de $" + (transporteCTG);
        mensajeVuelos8.innerHTML = "El valor total de los traslados es $" + (transporteCTG * input);
        mensajeVuelos13.innerHTML = "$" + ((Medellín + SantaMarta)* input);
        MensajeVuelos15.innerHTML = "$" + (transporteCTG * input);
    } else if (indexOrigen1 == 3 && indexdestino1 == 1){
        mensajeVuelos4.innerHTML = "El costo de esta ruta es $" + ((Cali + SanAndres)* input) + " para " + input + " personas";
        mensajeVuelos7.innerHTML = "Cada Traslado ida y regreso tiene un costo por persona de $" + (transporteSMR);
        mensajeVuelos8.innerHTML = "El valor total de los traslados es $" + (transporteSMR * input);
        mensajeVuelos13.innerHTML = "$" + ((Cali + SanAndres)* input);
        MensajeVuelos15.innerHTML = "$" + (transporteSMR * input);
    } else if (indexOrigen1 == 3 && indexdestino1 == 2){
        mensajeVuelos4.innerHTML = "El costo de esta ruta es $" + ((Cali + Cartagena)* input) + " para " + input + " personas";
        mensajeVuelos7.innerHTML = "Cada Traslado ida y regreso tiene un costo por persona de $" + (transporteSMR);
        mensajeVuelos8.innerHTML = "El valor total de los traslados es $" + (transporteSMR * input);
        mensajeVuelos13.innerHTML = "$" + ((Cali + Cartagena)* input);
        MensajeVuelos15.innerHTML = "$" + (transporteSMR * input);
    } else if (indexOrigen1 == 3 && indexdestino1 == 3) {
        mensajeVuelos4.innerHTML = "El costo de esta ruta es $" + ((Cali + SantaMarta)* input) + " para " + input + " personas";
        mensajeVuelos7.innerHTML = "Cada Traslado ida y regreso tiene un costo por persona de $" + (transporteSMR);
        mensajeVuelos8.innerHTML = "El valor total de los traslados es $" + (transporteSMR * input);
        mensajeVuelos13.innerHTML = "$" + ((Cali + SantaMarta)* input);
        MensajeVuelos15.innerHTML = "$" + (transporteSMR * input);
    } else if (indexOrigen1 == 0 && indexdestino1 == 0){
        mensajeVuelos4.innerHTML = "Calculando Ruta";
              
    } else if (indexOrigen1 == 0 && indexdestino1 == 1){
        mensajeVuelos4.innerHTML = "Calculando Ruta";
    
    } else if (indexOrigen1 == 0 && indexdestino1 == 2){
        mensajeVuelos4.innerHTML = "Calculando Ruta";
    
    } else if (indexOrigen1 == 0 && indexdestino1 == 3){
        mensajeVuelos4.innerHTML = "Calculando Ruta";
    
    } else if (indexOrigen1 == 1 && indexdestino1 == 0){
        mensajeVuelos4.innerHTML = "Calculando Ruta";
    
    } else if (indexOrigen1 == 2 && indexdestino1 == 0){
        mensajeVuelos4.innerHTML = "Calculando Ruta";
    
    } else if (indexOrigen1 == 3 && indexdestino1 == 0){
        mensajeVuelos4.innerHTML = "Calculando Ruta";
    
    } else {
        mensajeVuelos4.innerHTML = "Calculando Ruta";
    }
        

});

//Sección de Vuelos 
var productosCheckedVuelos = document.getElementById("CheckboxVuelos");
var mensajeVuelos = document.getElementById("MensajeVuelos");
var MensajeVuelosfinal = document.getElementById("MensajeVuelosfinal");


productosCheckedVuelos.addEventListener("click", function() {
    if(productosCheckedVuelos.checked){
        mensajeVuelos.innerHTML = "Confirme su elección"; 
        MensajeVuelosfinal.innerHTML = "El valor total de los vuelos es: ";
          
    } else {
        mensajeVuelos.innerHTML = "Continue al siguiente servicio";
        
    }
});

//Sección de Hotel 
var productosCheckedAlojamiento = document.getElementById("Checkboxalojamiento");
var MensajeAlojamiento = document.getElementById("MensajeAlojamiento");
var Mensajealojamientofinal = document.getElementById("Mensajealojamientofinal");

productosCheckedAlojamiento.addEventListener("click", function(){
    if(productosCheckedAlojamiento.checked){
        MensajeAlojamiento.innerHTML = "Seleccione el hotel de su interes"; 
        Mensajealojamientofinal.innerHTML = "El valor total del alojamiento es: "
          
    } else {
        MensajeAlojamiento.innerHTML = "Continue al siguiente servicio";
        
    }
});
//Aquí empieza mi prueba de selecion de hotel 
 
var SanAndres = new Array("-", "Isleño", "Sol Caribe", "Calypso");
var Cartagena = new Array("-", "Holiday Inn", "Cartagena Plaza", "Caribe By Faranda");
var SantaMarta = new Array("-", "Ac Marriot", "Galeon", "Santamar");

var todosLosHoteles = [
  [],
  SanAndres,
  Cartagena,
  SantaMarta,
];

function cambiaDestino(){
    var Destino
    Destino = document.f1.Destino[document.f1.Destino.selectedIndex].value
    if (Destino != 0){
      misHoteles = todosLosHoteles[Destino]
      numHoteles = misHoteles.length
      document.f1.hotel.length = numHoteles
      for(i=0;i<numHoteles;i++){
        document.f1.hotel.options[i].value=misHoteles[i]
        document.f1.hotel.options[i].text=misHoteles[i]
      }
    }else {
      document.f1.hotel.length = 1
      document.f1.hotel.options[0].value = "-"
      document.f1.hotel.text[0].value = "-"
    }
  
    document.f1.hotel.text[0].selected = true
  
}

// Calculo del alojamiento 
const calculoAlojamiento_Destino = document.querySelector(".destino");
const calculoAlojamiento_Hotel = document.querySelector(".hotel");
var input = parseInt(document.getElementById("inputNumber").value);
var input2 = parseInt(document.getElementById("inputNights").value);
var mensajeVuelos5 = document.getElementById("MensajeVuelos5");
var mensajeVuelos6 = document.getElementById("MensajeVuelos6");
var mensajeVuelos11 = document.getElementById("MensajeVuelos11");
var mensajeVuelos12 = document.getElementById("MensajeVuelos12");
var MensajeVuelos14 = document.getElementById("MensajeVuelos14");
var MensajeVuelos17 = document.getElementById("MensajeVuelos17");


calculoAlojamiento_Destino.addEventListener, calculoAlojamiento_Hotel.addEventListener('change', () =>{
  let indexDestino3 = calculoAlojamiento_Destino.selectedIndex;
  let indexhotel = calculoAlojamiento_Hotel.selectedIndex;

  var isleno = 900;
  var solCaribe = 800;
  var calypso = 700; 
  var holidayInn = 400;
  var cartagenaPlaza = 500;
  var caribe = 600;
  var acMarriot = 100;
  var galeon = 200;
  var santaMar = 300;
  var isleno2 = "Alimentación todo incluido";
  var solCaribe2 = "Alimentación todo incluido";
  var calypso2 = "Incluye Desayuno";
  var holidayInn2 = "Incluye Desayuno";
  var cartagenaPlaza2 = "Alimentación todo incluido";
  var caribe2 = "Incluye Desayuno";
  var acMarriot2 = "Incluye Desayuno";
  var galeon2 = "Alimentación todo incluido";
  var santamar2 = "Alimentación todo incluido";

  
  var input = parseInt(document.getElementById("inputNumber").value);
  const input2 = parseInt(document.getElementById("inputNights").value);

  const asistencia = 10;
  var nroDías = input2 + 1;
  var asistenciaXPax = (nroDías * asistencia);
  var asistenciaTotal = (asistenciaXPax * input);

  if (indexDestino3 == 1 && indexhotel == 1) {
    mensajeVuelos5.innerHTML = "El costo del alojamiento es de $" + (isleno * input2) + " por " + input2 + " noches.";
    mensajeVuelos6.innerHTML = "Incluye: " + isleno2;
    mensajeVuelos11.innerHTML = "El costo por persona es de $" + asistenciaXPax;
    mensajeVuelos12.innerHTML = "El valor total para "+ input + " personas es de $" + asistenciaTotal;
    MensajeVuelos14.innerHTML = "$" + (isleno * input2);
    MensajeVuelos17.innerHTML = "$" + asistenciaTotal;
  } else if (indexDestino3 == 1 && indexhotel == 2) {
    mensajeVuelos5.innerHTML = "El costo del alojamiento es de $" + (solCaribe * input2) + " por " + input2 + " noches.";
    mensajeVuelos6.innerHTML = "Incluye: " + solCaribe2;
    mensajeVuelos11.innerHTML = "El costo por persona es de $" + asistenciaXPax;
    mensajeVuelos12.innerHTML = "El valor total para "+ input + " personas es de $" + asistenciaTotal;
    MensajeVuelos14.innerHTML = "$" + (solCaribe * input2);
    MensajeVuelos17.innerHTML = "$" + asistenciaTotal;
  } else if (indexDestino3 == 1 && indexhotel == 3) {
    mensajeVuelos5.innerHTML = "El costo del alojamiento es de $" + (calypso * input2) + " por " + input2 + " noches.";
    mensajeVuelos6.innerHTML = "Incluye: " + calypso2;
    mensajeVuelos11.innerHTML = "El costo por persona es de $" + asistenciaXPax;
    mensajeVuelos12.innerHTML = "El valor total para "+ input + " personas es de $" + asistenciaTotal;
    MensajeVuelos14.innerHTML = "$" + (calypso * input2);
    MensajeVuelos17.innerHTML = "$" + asistenciaTotal;
  } else if (indexDestino3 == 2 && indexhotel == 1) {
    mensajeVuelos5.innerHTML = "El costo del alojamiento es de $" + (holidayInn * input2) + " por " + input2 + " noches.";
    mensajeVuelos6.innerHTML = "Incluye: " + holidayInn2;
    mensajeVuelos11.innerHTML = "El costo por persona es de $" + asistenciaXPax;
    mensajeVuelos12.innerHTML = "El valor total para "+ input + " personas es de $" + asistenciaTotal;
    MensajeVuelos14.innerHTML = "$" + (holidayInn * input2);
    MensajeVuelos17.innerHTML = "$" + asistenciaTotal;
  } else if (indexDestino3 == 2 && indexhotel == 2) {
    mensajeVuelos5.innerHTML = "El costo del alojamiento es de $" + (cartagenaPlaza * input2) + " por " + input2 + " noches.";  
    mensajeVuelos6.innerHTML = "Incluye: " + cartagenaPlaza2;
    mensajeVuelos11.innerHTML = "El costo por persona es de $" + asistenciaXPax;
    mensajeVuelos12.innerHTML = "El valor total para "+ input + " personas es de $" + asistenciaTotal;
    MensajeVuelos14.innerHTML = "$" + (cartagenaPlaza * input2);
    MensajeVuelos17.innerHTML = "$" + asistenciaTotal;
  } else if (indexDestino3 == 2 && indexhotel == 3) {
    mensajeVuelos5.innerHTML = "El costo del alojamiento es de $" + (caribe * input2) + " por " + input2 + " noches.";  
    mensajeVuelos6.innerHTML = "Incluye: " + caribe2;   
    mensajeVuelos11.innerHTML = "El costo por persona es de $" + asistenciaXPax;
    mensajeVuelos12.innerHTML = "El valor total para "+ input + " personas es de $" + asistenciaTotal;
    MensajeVuelos14.innerHTML = "$" + (caribe * input2);
    MensajeVuelos17.innerHTML = "$" + asistenciaTotal;
  } else if (indexDestino3 == 3 && indexhotel == 1) {
    mensajeVuelos5.innerHTML = "El costo del alojamiento es de $" + (acMarriot * input2) + " por " + input2 + " noches.";
    mensajeVuelos6.innerHTML = "Incluye: " + acMarriot2;
    mensajeVuelos11.innerHTML = "El costo por persona es de $" + asistenciaXPax;
    mensajeVuelos12.innerHTML = "El valor total para "+ input + " personas es de $" + asistenciaTotal;
    MensajeVuelos14.innerHTML = "$" + (acMarriot * input2);
    MensajeVuelos17.innerHTML = "$" + asistenciaTotal;
  } else if (indexDestino3 == 3 && indexhotel == 2) {
    mensajeVuelos5.innerHTML = "El costo del alojamiento es de $" + (galeon * input2) + " por " + input2 + " noches.";
    mensajeVuelos6.innerHTML = "Incluye: " + galeon2;
    mensajeVuelos11.innerHTML = "El costo por persona es de $" + asistenciaXPax;
    mensajeVuelos12.innerHTML = "El valor total para "+ input + " personas es de $" + asistenciaTotal;
    MensajeVuelos14.innerHTML = "$" + (galeon * input2);
    MensajeVuelos17.innerHTML = "$" + asistenciaTotal;
  } else if (indexDestino3 == 3 && indexhotel == 3) {
    mensajeVuelos5.innerHTML = "El costo del alojamiento es de $" + (santaMar * input2) + " por " + input2 + " noches.";
    mensajeVuelos6.innerHTML = "Incluye: " + santamar2;
    mensajeVuelos11.innerHTML = "El costo por persona es de $" + asistenciaXPax;
    mensajeVuelos12.innerHTML = "El valor total para "+ input + " personas es de $" + asistenciaTotal;
    MensajeVuelos14.innerHTML = "$" + (santaMar * input2);
    MensajeVuelos17.innerHTML = "$" + asistenciaTotal;
  } else {
    mensajeVuelos5.innerHTML = "No reconozco tu elección";
    mensajeVuelos11.innerHTML = "No reconozco tu elección";
  }

});

//Sección Transporte
var productosCheckedTransporte = document.getElementById("CheckboxTransporte");
var MensajeTransporte = document.getElementById("MensajeTransporte");
var Mensajetransportefinal = document.getElementById("Mensajetransportefinal");

productosCheckedTransporte.addEventListener("click", function(){

    if(productosCheckedTransporte.checked){
        MensajeTransporte.innerHTML = "Detalle de la tarifa: "; 
        Mensajetransportefinal.innerHTML = "El valor total del transporte es: "
          
    } else {
        MensajeTransporte.innerHTML = "Continue al siguiente servicio";
        
    }

});



//Sección Tours 
var productosCheckedTours = document.getElementById("CheckboxTours");
var MensajeTours = document.getElementById("MensajeTours");
var Mensajetoursfinal = document.getElementById("Mensajetoursfinal");

productosCheckedTours.addEventListener("click", function(){
    if(productosCheckedTours.checked){
        MensajeTours.innerHTML = "Seleccione el tour de su interes"; 
        Mensajetoursfinal.innerHTML = "El valor total de los tours es: ";
          
    } else {
        MensajeTours.innerHTML = "Continue al siguiente servicio";
        
    }
});

var TourSanAndres = new Array("-", "Vuelta a la Isla", "Tour en Catamaran");
var TourCartagena = new Array("-", "Islas del Rosario", "Day tour Barú");
var TourSantaMarta = new Array("-", "Parque Tayrona", "Playa Blanca");

var todosLosTours = [
    [],
    TourSanAndres,
    TourCartagena,
    TourSantaMarta,
];

function cambiaDestino2(){
    var Destino2
    Destino2 = document.f2.Destino2[document.f2.Destino2.selectedIndex].value
    if (Destino2 != 0){
      misTours = todosLosTours[Destino2]
      numTours = misTours.length
      document.f2.tour.length = numTours
      for(i=0;i<numTours;i++){
        document.f2.tour.options[i].value = misTours[i]
        document.f2.tour.options[i].text = misTours[i]
      }
    }else{
      document.f2.tour.length = 1
      document.f2.tour.options[0].value = "-"
      document.f2.tour.text[0].value = "-"
    }
  
    document.f2.tour.text[0].selected = true
    
  
}

const calculoTours_Destino = document.querySelector(".destino2");
const calculoTours = document.querySelector(".tour");
var mensajeVuelos9 = document.getElementById("MensajeVuelos9");
var mensajeVuelos10 = document.getElementById("MensajeVuelos10");
var input = parseInt(document.getElementById("inputNumber").value);
var MensajeVuelos16 = document.getElementById("MensajeVuelos16");

calculoTours.addEventListener('change', () =>{
    let indexDestino4 = calculoTours_Destino.selectedIndex;
    let indexTour = calculoTours.selectedIndex;

    var vueltaIsla = 90;
    var tourCatamaran = 100;
    var islaRosario = 110;
    var baru = 80;
    var tayrona = 120;
    var playaBlanca = 70;

    var input = parseInt(document.getElementById("inputNumber").value);

    if (indexDestino4 == 1 && indexTour == 1){
        mensajeVuelos9.innerHTML = "El costo de este tour es $" + vueltaIsla + " por persona";
        mensajeVuelos10.innerHTML = "El valor total del tour es $" + (vueltaIsla*input);
        MensajeVuelos16.innerHTML = "$" + (vueltaIsla*input);
    } else if (indexDestino4 == 1 && indexTour == 2){
        mensajeVuelos9.innerHTML = "El costo de este tour es $" + tourCatamaran + " por persona";
        mensajeVuelos10.innerHTML = "El valor total del tour es $" + (tourCatamaran*input);
        MensajeVuelos16.innerHTML = "$" + (tourCatamaran*input);
    } else if (indexDestino4 == 2 && indexTour == 1){
        mensajeVuelos9.innerHTML = "El costo de este tour es $" + islaRosario + " por persona";
        mensajeVuelos10.innerHTML = "El valor total del tour es $" + (islaRosario*input);
        MensajeVuelos16.innerHTML = "$" + (islaRosario*input);
    } else if (indexDestino4 == 2 && indexTour == 2){
        mensajeVuelos9.innerHTML = "El costo de este tour es $" + baru + " por persona";
        mensajeVuelos10.innerHTML = "El valor total del tour es $" + (baru*input);
        MensajeVuelos16.innerHTML = "$" + (baru*input);
    } else if (indexDestino4 == 3 && indexTour == 1){
        mensajeVuelos9.innerHTML = "El costo de este tour es $" + tayrona + " por persona";
        mensajeVuelos10.innerHTML = "El valor total del tour es $" + (tayrona*input);
        MensajeVuelos16.innerHTML = "$" + (tayrona*input);
    } else if (indexDestino4 == 3 && indexTour == 2){
        mensajeVuelos9.innerHTML = "El costo de este tour es $" + playaBlanca + " por persona";
        mensajeVuelos10.innerHTML = "El valor total del tour es $" + (playaBlanca*input);
        MensajeVuelos16.innerHTML = "$" + (playaBlanca*input);
    } else {
        mensajeVuelos9.innerHTML = "Selecciona la opción correcta";
    }

});



//Sección tarjeta de asistencia medica 
var productosCheckedTarjeta = document.getElementById("CheckboxTarjetas");
var MensajeTarjetas = document.getElementById("MensajeAsistencias");
var Mensajeasistenciasfinal = document.getElementById("Mensajeasistenciasfinal");

productosCheckedTarjeta.addEventListener("click", function(){
    if(productosCheckedTarjeta.checked){
        MensajeTarjetas.innerHTML = "Revise el costo de su tarjeta "; 
        Mensajeasistenciasfinal.innerHTML = "El valor total de la asistencia es: "; 
    } else {
        MensajeTarjetas.innerHTML = "Servicio no incluido";
        
    }
});

// Sección de pagos 





