let button4 = document.querySelector('#task5');
button4.onclick = function() {
    let num=0;
    for(var i=1 ;i<=10;i++){
        for(var j=1;j<=10;j++){
            num=i*j;
            console.log(i + "*" + j + "=" + num);
        }
    }
}