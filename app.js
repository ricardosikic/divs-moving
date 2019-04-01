let sq = document.getElementById('square');
let sq2 = document.getElementById('square2');


sq.addEventListener('click', () => {
   
    //callback
    setTimeout(up, 1000);

    //up function 
    function up() {
        sq.style.animation = 'down 3s';
    }

});

sq2.addEventListener('click', () => {
    setTimeout(upDown, 1000);

    function upDown() {
        sq2.style.animation = 'upDown 3s';
    }
});
