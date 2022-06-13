let button3 = document.querySelector('#task4');
button3.onclick = function() {
    let randomnum = prompt("Enter number")
    for(i = 0 ; i<= randomnum; i++){
        if(randomnum%i !==0)continue
        console.log(i)
    }
    console.log("Парні дільникики")
    for(j = 0; j<=randomnum; j++){
        if(randomnum%j !==0)continue
        if(j%2 !==0) continue;
        console.log(j)
    }
    console.log("Сума парних ділників");
    let simplenum = 0
    for(k = 0; k<=randomnum; k++){
        if(randomnum%k !==0)continue
        if(k%2 !==0) continue;
        simplenum += k;
    }
    console.log(simplenum);
}