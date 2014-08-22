Array(100).join('.,').split('.').map(function(i, k) {
    var r = 1 + k,
        ping = r % 3 === 0,
        pong = r % 5 === 0;
    return ping && pong ? 'bazinga' : ping ? 'ping' : pong ? 'pong' : r;
}).forEach(function(s) {
    console.log(s)
});
