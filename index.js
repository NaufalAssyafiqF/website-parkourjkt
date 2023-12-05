let nama = document.querySelector("#nama");
let button = document.querySelector(".btn-warning");
let berhasil = document.querySelector("#berhasil")

button.addEventListener("click",function(e){
    e.preventDefault();
    berhasil.innerHTML = "selamat "+nama.value+" anda telah terdaftar";
})
