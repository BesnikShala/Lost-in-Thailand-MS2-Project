function showInfo(ab) {
    if(ab == 0){
        document.getElementsByClassName('info')[0].style.display="block";
        document.getElementsByClassName('info')[1].style.display = "none";
        document.getElementsByClassName('info')[2].style.display = "none";
        
    }
    if (ab == 1){
        document.getElementsByClassName('info')[0].style.display = "none";
        document.getElementsByClassName('info')[1].style.display = "block";
        document.getElementsByClassName('info')[2].style.display = "none";
    }
     if (ab == 2) {
         document.getElementsByClassName('info')[0].style.display = "none";
         document.getElementsByClassName('info')[1].style.display = "none";
         document.getElementsByClassName('info')[2].style.display = "block";
     }
}