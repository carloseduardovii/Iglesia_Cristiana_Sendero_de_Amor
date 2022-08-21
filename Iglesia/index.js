const imgUrl = [
  "assets/images/img_Tiempo_de_Oracion.jpeg",
  "assets/images/img_Servicio_Dominical.jpeg",
  "assets/images/img_Jovenes_Bachilleres.jpeg",
  "assets/images/img_ayuno.jpeg",
  "assets/images/img_Grupo_Damas.jpeg",
  "assets/images/img_Grupo_de_Oracion.jpeg",
  "assets/images/img_Mercados_de_Amor.jpeg",
  "assets/images/img_Diezmos_y_Ofrendas.jpeg",
  "assets/images/img_Velada_de_Oracion.jpeg",
  "assets/images/img_Curso_Conociendo_a_ Dios.jpeg",
];

let indexCurentImg = 0;
const btnBack = document.getElementById("back");
const btnForward = document.getElementById("forward");
const img = document.getElementById("img-carousel");

document.addEventListener("DOMContentLoaded", (e) => uploadImg(e));
btnForward.addEventListener("click", (e) => showNext(e));
btnBack.addEventListener("click", (e) => showBack(e));

function uploadImg() {
  //background-image -> backgroundImage
  img.style.backgroundImage = `url(${imgUrl[indexCurentImg]})`;
}

function showNext(e) {
  if (indexCurentImg >= imgUrl.length - 1) {
    indexCurentImg = 0;
  } else {
    indexCurentImg++;
  }

  uploadImg();
  e.stopPropagation();
}

function showBack(e) {
  if (indexCurentImg <= 0) {
    indexCurentImg = imgUrl.length - 1;
  } else {
    indexCurentImg--;
  }

  uploadImg();

  e.stopPropagation();
}
