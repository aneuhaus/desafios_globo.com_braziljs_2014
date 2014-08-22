// recursiva (msdn recursion example)
function reFactorial(num) {
    if (num < 0) {
        return -1;
    } else if (num == 0) {
        return 1;
    } else {
        return (num * reFactorial(num - 1));
    }
}
// iterativa
function itFactorial(num){
    var mem = 1;
    if (num < 0) {
        return -1;
    } else if (num == 0) {
        return mem;
    } else {
        for (i = num; i > 0; i--) {
            mem = mem * i;
        };
        return mem;
    }
}
