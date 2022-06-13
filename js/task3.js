let button2 = document.querySelector('#task3');
button2.onclick = function() {
    let total = 0
    for ( i = 100; i < 200; i++) {
        if (i%3 !==0) continue
        console.log(i)
    }
}