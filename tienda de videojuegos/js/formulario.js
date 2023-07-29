const inputs = document.querySelectorAll(".inputs");

// inputs.addEventListener("blur", validarNombre)

inputs.forEach(inp => {
   inp.addEventListener("blur", validarNombre)
})

function validarNombre(e) {
   if (e.target.value.trim() === "") {
      this.style.borderBottomColor = "red";
      return
   }
   if (e.target.value != "ana luz") {
      alert(`${e.value} es dominican@`)
      
   } else {
      alert("ana luz es haitiana")
   }
}

// function validarNombre(e) {
//    if (e.target.value.trim() === "") {
//       this.style.borderBottomColor = "red";
//       return
//    }
//    if (e.target.value.length != 5) {
//       alert("pon cinco asarozo")
//       return
//    }
// }
