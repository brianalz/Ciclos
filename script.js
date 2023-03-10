window.onload=init;
        function init(){
            setInterval(mover,10);
            izquierda  = 0;
        }
           
        function mover(){
            izquierda++;
            if (izquierda<550){
                document.querySelector(".corredor").style.left = izquierda + 'px';
            }else{
                izquierda = 0;
            }      
        } 