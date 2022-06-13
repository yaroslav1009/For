let button = document.querySelector('#task1');
button.onclick = function() {
    let total = 0;
    for ( i = 0; i < 500; i++) {
        total += i;
    }
    devil = total/2;
    alert('Average from 1 to 500 = ' + devil);
}