function cambiaColore(){
    let nuovoColor = document.getElementById('nome').value;
    document.body.style.backgroundColor = nuovoColor;
    //console.log(color);
    //document.getElementById("testo").value = color;
}

function resetColore(){
    let colore = "#ffffff";
    //console.log(colore);
    document.body.style.backgroundColor = colore;
}

function valoreRange(val) {
    document.getElementById('valore').value=val; 
    
  }

  function valoreBottone(val2){
      //document.getElementById('barra').value = val2;
      if(val2 > 100){
      //console.log("oltre");
      alert("VALORE MAGGIORE DI 100");
      }else if(val2 < 0){
      alert("VALORE MINORE DI 0");
      }else{
        document.getElementById('barra').value = val2;
      }
      
  }

  function mostraCheck() {
      
    //var checkBox = document.getElementById("check, check2, check3");

    if (check.checked && check2.checked == true){
      check3.style.display = "inline";
      text.style.display = "inline";
      minitext.style.display="inline";
      
    } else {
       check3.style.display = "none";
       text.style.display = "none";
       minitext.style.display="none";
    }
  }