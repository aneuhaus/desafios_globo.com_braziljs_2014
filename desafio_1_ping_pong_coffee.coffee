fn = (n)->
  ping = n % 3 is 0
  pong = n % 5 is 0
  switch true
    when ping and pong then 'bazinga'
    when ping then 'ping'
    when pong then 'pong'
    else n
for n in [1..100]
  console.log fn n