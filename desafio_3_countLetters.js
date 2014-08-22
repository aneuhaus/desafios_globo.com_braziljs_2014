var countLetters = function(str, i) {
    return str.split('').reduce(function(m, l) {
        if(i){
            l = l.toLowerCase();
        }
        if (!m[l]) {
            m[l] = 1;
        } else {
            m[l] = m[l] + 1;
        }
        return m;
    }, {});
};
