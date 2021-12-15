var fondo;
var fondImg
var Baja_California_
var Baja_California_Sur
var Campeche_
var Chihuahua_
var Chiapas_
var Coahuila_de_Zaragoza_
var Colima_
var Durango_34000
var Guanajuato_
var Guerrero_
var Hidalgo_
var Jalisco_
var Mexico_
var Michoacan_de_Ocampo_
var Morelos_
var Nayarit_
var Nuevo_Leon
var Oaxaca
var Puebla
var Querétaro
var Quintana_Roo
var San_Luis_Potosi
var Sinaloa
var Sonora
var Tabasco
var Tamaulipas
var Tlaxcala
var Veracruz
var Yucatán
var Zacatecas
var Mexico
var aguascalientes

var Baja_CaliforniaN
var Baja_California_SurN
var CampecheN
var ChihuahuaN
var ChiapasN
var Coahuila_de_ZaragozaN
var ColimaN
var DurangoN
var GuanajuatoN
var GuerreroN
var HidalgoN
var JaliscoN
var MexicoN
var Michoacan_de_OcampoN
var MorelosN
var NayaritN
var Nuevo_LeonN
var OaxacaN
var PueblaN
var QuerétaroN
var Quintana_RooN
var San_Luis_PotosiN
var SinaloaN
var SonoraN
var TabascoN
var TamaulipasN
var TlaxcalaN
var VeracruzN
var YucatánN
var ZacatecasN
var MexicoN
var aguascalientesN
var respuesta;

function preload(){
  cargarImagenes();
}

function setup() {
  createCanvas(1300,600);
  crearSprites();
  fondo.addImage(fondImg)
  fondo.scale=0.5
  respuesta.visible = false;
  regresar.visible = false;
}

function draw() {
  background(174,219,132);
  console.log("x: "+ mouseX + "y: "+mouseY);

  if(mousePressedOver(regresar)){
    respuesta.visible = false;
    regresar.visible = false;
  }

  if(mousePressedOver(Baja_California)){
    console.log("bajacalifornia")
    respuesta.visible = true;
    respuesta.addImage(Baja_CaliforniaN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }

  if(mousePressedOver( Baja_California_Sur)){
    console.log(" Baja_California_Sur")
    respuesta.visible = true;
    respuesta.addImage(Baja_California_SurN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Campeche)){
    console.log("Campeche")
    respuesta.visible = true;
    respuesta.addImage(CampecheN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Chihuahua)){
    console.log("Chihuahua")
    respuesta.visible = true;
    respuesta.addImage(ChihuahuaN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Chiapas)){
    console.log("Chiapas")
    respuesta.visible = true;
    respuesta.addImage(ChiapasN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Coahuila_de_Zaragoza)){
    console.log("Coahuila_de_Zaragoza")
    respuesta.visible = true;
    respuesta.addImage(Coahuila_de_ZaragozaN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver( Colima)){
    console.log(" Colima")
    respuesta.visible = true;
    respuesta.addImage(ColimaN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Durango)){
    console.log("Durango")
    respuesta.visible = true;
    respuesta.addImage(DurangoN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Guanajuato)){
    console.log("Guanajuato")
    respuesta.visible = true;
    respuesta.addImage(GuanajuatoN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Guerrero)){
    console.log("Guerrero")
    respuesta.visible = true;
    respuesta.addImage(GuerreroN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Hidalgo)){
    console.log("Hidalgo")
    respuesta.visible = true;
    respuesta.addImage(HidalgoN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Jalisco)){
    console.log("Jalisco")
    respuesta.visible = true;
    respuesta.addImage(JaliscoN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Mexico)){
    console.log("Mexico")
    respuesta.visible = true;
    respuesta.addImage(MexicoN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Michoacan_de_Ocampo)){
    console.log("Michoacan_de_Ocampo")
    respuesta.visible = true;
    respuesta.addImage(Michoacan_de_OcampoN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver( Morelos)){
    console.log(" Morelos")
    respuesta.visible = true;
    respuesta.addImage(MorelosN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Nayarit)){
    console.log("Nayarit")
    respuesta.visible = true;
    respuesta.addImage(NayaritN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Nuevo_Leon)){
    console.log("Nuevo_Leon")
    respuesta.visible = true;
    respuesta.addImage(Nuevo_LeonN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Oaxaca)){
    console.log("Oaxaca")
    respuesta.visible = true;
    respuesta.addImage(OaxacaN)
    respuesta.scale = 0.7;
    regresar. visible= true;
    clima();
  }
  if(mousePressedOver(Puebla)){
    console.log("Puebla")
    respuesta.visible = true;
    respuesta.addImage(PueblaN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Querétaro)){
    console.log("Querétaro")
    respuesta.visible = true;
    respuesta.addImage(QuerétaroN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Quintana_Roo)){
    console.log("Quintana_Roo")
    respuesta.visible = true;
    respuesta.addImage(Quintana_RooN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(San_Luis_Potosi)){
    console.log("San_Luis_Potosi")
    respuesta.visible = true;
    respuesta.addImage(San_Luis_PotosiN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Sinaloa)){
    console.log("Sinaloa")
    respuesta.visible = true;
    respuesta.addImage(SinaloaN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver( Sonora)){
    console.log(" Sonora")
    respuesta.visible = true;
    respuesta.addImage(SonoraN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Tabasco)){
    console.log("Tabasco")
    respuesta.visible = true;
    respuesta.addImage(TabascoN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Tamaulipas)){
    console.log("Tamaulipas")
    respuesta.visible = true;
    respuesta.addImage(TamaulipasN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Tlaxcala)){
    console.log("Tlaxcala")
    respuesta.visible = true;
    respuesta.addImage(TlaxcalaN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Veracruz)){
    console.log("Veracruz")
    respuesta.visible = true;
    respuesta.addImage(VeracruzN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Yucatán)){
    console.log("Yucatán")
    respuesta.visible = true;
    respuesta.addImage(YucatánN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver( Zacatecas)){
    console.log(" Zacatecas")
    respuesta.visible = true;
    respuesta.addImage(ZacatecasN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(Mexico)){
    console.log("Mexico")
    respuesta.visible = true;
    respuesta.addImage(MexicoN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }
  if(mousePressedOver(aguascalientes)){
    console.log("aguascalientes")
    respuesta.visible = true;
    respuesta.addImage(aguascalientesN)
    respuesta.scale = 0.7;
    regresar. visible= true;
  }

  drawSprites();
}
async function clima(){
  var response = await fetch("https://api.meteomatics.com/now/t_2m:C/17.48,97.46/json")
  var responseJSON = await response.json();
  console.log(responseJSON);
}



