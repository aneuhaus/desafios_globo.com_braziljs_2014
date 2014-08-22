countLetters = (str, i = false) ->
  str.split('').reduce((m, l) ->
    l = do l.toLowerCase if i
    if !m[l] then m[l] = 1 else m[l]++
    m
  ,{})