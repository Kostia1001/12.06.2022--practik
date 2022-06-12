  let colorNumber = 0 ;
  const colors = document.getElementsByClassName("svetofor__krug");
  const modifickators = ["svetofor__krug--red","svetofor__krug--yellow","svetofor__krug--green"];

  colors[colorNumber].classList.add(modifickators[colorNumber]);
  function onClickNext (){
    colors[colorNumber].classList.remove(modifickators[colorNumber]);
    if (colorNumber === 2){
        colorNumber = 0;
        
    } else {
        colorNumber++;
    }
    colors[colorNumber].classList.add(modifickators[colorNumber]);
    
  }