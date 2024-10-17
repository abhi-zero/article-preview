const shareBtnElem = document.querySelectorAll('.jsButton');
const shareSection = document.querySelector('.hide');
 

  function applyButtonAction(){
    const screenWidth = window.innerWidth;
    shareBtnElem.forEach(function(btn){
      if(screenWidth < 900){
        btn.addEventListener('click',shareLinkSmallScreen);
      }
      else{
        btn.addEventListener('click',shareLinkLargeScreen);
      }
        
  })
  }


 
  function shareLinkSmallScreen(){
    if(shareSection.classList.contains('hide')){
      shareSection.classList.remove('hide');
      shareSection.classList.add('wrapper');
  }
  else {
      shareSection.classList.remove('wrapper');
      shareSection.classList.add('hide');
  }
  }

  function shareLinkLargeScreen(){
    if(shareSection.classList.contains('hide')){
      shareSection.classList.remove('hide');
      shareSection.classList.add('wrapper2');
  }
  else {
      shareSection.classList.remove('wrapper2');
      shareSection.classList.add('hide');
  }
  }


  applyButtonAction();


window.addEventListener('resize', applyButtonAction);