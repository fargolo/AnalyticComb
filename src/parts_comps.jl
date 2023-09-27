"""
    partitions(n)

Asymptotics for partition of integers by Hardy and Ramanujan, later improved by Rademache
"""
partitions(n) = (1/(4*n*sqrt(3)))*exp(pi*sqrt(2n/3))


"""
    primes_composition(n)

Asymptotics for composition of primes.
"""
primes_composition(n) = 0.30365 * 1.47622^n

"""
    restricted_sum_part_gf(r)

Generating function for partition with restricted summand.
"""
function restricted_sum_part_gf(r)
    z = SymPy.symbols("z")
    return(prod([SEQ(z^i) for i in r]))
end

"""
    restricted_sum_part(n,r)

Number of partitions with components in r with restricted summand n.

n must be an integer and r must be a set of integers, like in r = [1,5,10,25] , n = 99.
"""
function restricted_sum_part(n,r)
    z = SymPy.symbols("z")
    coefs = collect(series(restricted_sum_part_gf(r),z,0,n+1),z)
    return(coefs.coeff(z,n))
end