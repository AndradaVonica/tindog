// window.addEventListener("scroll", function () {
//   var header = document.querySelector("header");
//   console.log(window.scrollY);
//   header.classList.toggle("sticky", window.scrollY > 0);
// });

// document.addEventListener("scroll", function (e) {
//   lastKnownScrollPosition = window.scrollY;
//   console.log(lastKnownScrollPosition);
//   if (!ticking) {
//     window.requestAnimationFrame(function () {
//       doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });
// {
/* <div
  class="StretchedBox Bgz(cv) Bgp(c) Pe(n) Bga(f)--ml"
  tabindex="-1"
  aria-label=""
  style='background-image: url("https://tinder.com/static/build/07eef8b101ca939c978a599f508aa955.webp");'
></div>; */
// }

const open = document.getElementById("open");
const close = document.getElementById("close");
const span = document.getElementsByClassName("close")[0];
const modal = document.getElementById("modals");
const body = document.querySelector("body");
const navbar = document.getElementById("header");
const openTwo = document.getElementById("open-two");
const closeTwo = document.getElementById("close-two");
const spanTwo = document.getElementsByClassName("close-two")[0];
const modalTwo = document.getElementById("modals-two");
const openn = document.getElementById("openn");
const open3 = document.getElementById("open-three");
const close3 = document.getElementById("close-three");
const span3 = document.getElementsByClassName("close-three")[0];
const modalThree = document.getElementById("modals-three");

// open.addEventListener("click", () => {
//   modals.classList.add("show");
// });

// close.addEventListener("click", () => {
//   modals.classList.remove("show");
// });

// open.onclick = function () {
//   modalContent.style.display = "block";
// };
// span.onclick = function () {
//   modalContent.style.display = "none";
// };
//this makes the modal close when clicking it
window.onclick = function (event) {
  if (
    event.target == modalThree ||
    event.target == modalTwo ||
    event.target === modal
  ) {
    modal.classList.add("modal-hide");
    modal.classList.remove("modal-show");
    modalTwo.classList.add("modal-hide-two");
    modalTwo.classList.remove("modal-show-two");
    modalThree.classList.add("modal-hide-three");
    modalThree.classList.remove("modal-show-three");
  }
};

open.addEventListener("click", () => {
  modal.classList.remove("modal-hide");
  modal.classList.add("modal-show");
});
openn.addEventListener("click", () => {
  modal.classList.remove("modal-hide");
  modal.classList.add("modal-show");
});
close.addEventListener("click", () => {
  modal.classList.remove("modal-show");
  modal.classList.add("modal-hide");
});

openTwo.addEventListener("click", () => {
  //   modal.classList.remove("modal-show");
  modalTwo.classList.remove("modal-hide-two");
  //   modal.classList.remove("modal-hide");
  modalTwo.classList.add("modal-show-two");
});

closeTwo.addEventListener("click", () => {
  modalTwo.classList.remove("modal-show-two");
  //   modal.classList.remove("modal-hide");
  //   modal.classList.remove("modal-show");
  modalTwo.classList.add("modal-hide-two");
});

open3.addEventListener("click", () => {
  modalThree.classList.remove("modal-hide-three");
  modalThree.classList.add("modal-show-three");
});
close3.addEventListener("click", () => {
  modalThree.classList.remove("modal-show-three");
  modalThree.classList.add("modal-hide-three");
});

// window.onclick = function (event) {
//   if (event.target == modalTwo) {
//     modalTwo.classList.add("modal-hide-two");
//     modalTwo.classList.remove("modal-show-two");
//   }
// };
// body.addEventListener("scroll", () => {
//   const viewHeight = window.innerHeight;
//   const scrollHeight = body.scrollTop;
//   if (scrollHeight + 115 > viewHeight) {
//     console.log("o depasit");
//     body.classList.remove("header");
//   }
// });
