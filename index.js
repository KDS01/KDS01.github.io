const modalElem = document.getElementById("modal");
const decoderModal=document.getElementById('myModal');
modalElem.onwheel = (e) => {
  e.stopPropagation();
  e.preventDefault();
};

modalElem.onclick = document.getElementById("close-btn").onclick = () => {
  modalElem.style.display = "";
};

document.getElementById("modal-box").onclick = (e) => {
  e.stopPropagation();
};

const projectArr = {
  firstProject: { details: "TEAM PROJECT /"+"PROJECT NOBRAND"},
  secondProject: { details: "PERSONAL PROJECT / PROJECT DECODER" },
};

[...document.getElementsByClassName("project-info")].forEach((i) => {
  i.onclick = (e) => {
    modalElem.style.display = "flex";
    modalElem.getElementsByClassName("details")[0].innerHTML =
      projectArr[e.target.dataset.name].details;
  };
});
document.getElementById('disabled').onclick=()=>{
  alert('현재 인스턴스 중지 상태입니다');
}