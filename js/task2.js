let button1 = document.querySelector('#task2');
button1.onclick = function() {
    let total = 0
    for ( i = 30; i < 80; i++) {
        if (i%2 !== 0) continue
        total += i;
    }
    alert("The sum of paired numbers in the range from (30 to 80) : " + total);
}