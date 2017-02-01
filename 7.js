//using previous functions 3 ways to create inc function 
// inc(5)   == 6
// inc(inc(5)) == 7

inc = addf(1)

incf = applyf(add) (1)

inc = curry(add, 1)
