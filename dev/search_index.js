var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = AnalyticComb","category":"page"},{"location":"#AnalyticComb","page":"Home","title":"AnalyticComb","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for AnalyticComb.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [AnalyticComb]","category":"page"},{"location":"#AnalyticComb.I_gf-Tuple{Any}","page":"Home","title":"AnalyticComb.I_gf","text":"I_gf(z)\n\nIntegers as combinatorial structures I(z)= sumn geq 1_ z^n = fracz1-z\n\n\n\n\n\n","category":"method"},{"location":"#AnalyticComb.MSET-Tuple{Any, Any}","page":"Home","title":"AnalyticComb.MSET","text":"MSET(z)\n\nMultiset operator (Pólya exponential operator). \n\nDefined as A = MSET(B) implies A(z) = frac11 - B(z).\n\n\n\n\n\n","category":"method"},{"location":"#AnalyticComb.SEQ-Tuple{Any}","page":"Home","title":"AnalyticComb.SEQ","text":"SEQ(z)\n\nSequence operator (Pólya quasi-inverse operator). \n\nDefined as A = SEQ(B) implies A(z) = frac11 - B(z).\n\n\n\n\n\n","category":"method"},{"location":"#AnalyticComb.W_coeff-Tuple{Any}","page":"Home","title":"AnalyticComb.W_coeff","text":"W_coeff(r;n_tot=200)\n\nTaylor series coefficient from generating function for binary words that never have more than r consecutive identical letters. \n\nThe number of binary words that never have more than r consecutive identical letters is found to be (set α = β = r). n_tot defaults to 200, according to the example in Flajolet & Sedgewick pag. 52\n\n\n\n\n\n","category":"method"},{"location":"#AnalyticComb.p_binary_words_doub_runl-Tuple{Any, Any}","page":"Home","title":"AnalyticComb.p_binary_words_doub_runl","text":"p_binary_words_doub_runl(k,n)\n\nReturns probablity associatied with k-lenght double runs (or either 0s or 1s) in a sequence of size n. \n\nSpecification is W ∼= SEQ(b) SEQ(a SEQ(a) b SEQ(b)) SEQ(a). Refer to the example in Flajolet & Sedgewick pag. 52.  \n\n\n\n\n\n","category":"method"},{"location":"#AnalyticComb.partitions_asym-Tuple{Any}","page":"Home","title":"AnalyticComb.partitions_asym","text":"partitions_asym(n)\n\nAsymptotics for partition of integers (EIS A000041) by Hardy and Ramanujan, later improved by Rademache\n\n\n\n\n\n","category":"method"},{"location":"#AnalyticComb.partitions_gf-Tuple{Any, Any}","page":"Home","title":"AnalyticComb.partitions_gf","text":"partitions_gf(z,max)\n\nGenerating function for partitions P(z)= prodm = 1_Inf frac11-z^m. Use series to obtain counts(EIS A000041): series(partitions_gf(z,10),z,0,8) for n up to 8.\n\n\n\n\n\n","category":"method"},{"location":"#AnalyticComb.primes_composition_asym-Tuple{Any}","page":"Home","title":"AnalyticComb.primes_composition_asym","text":"primes_composition_asym(n)\n\nAsymptotics for composition of n into prime parts (A023360).\n\n\n\n\n\n","category":"method"},{"location":"#AnalyticComb.restricted_sum_comp-Tuple{Any, Any}","page":"Home","title":"AnalyticComb.restricted_sum_comp","text":"restricted_sum_comp(n,r)\n\nNumber of compositions of n with components in the set {1,2,..,r}. \n\nr = 2 yields Fibonnaci numbers (EIS A000045) and r>2 yields generalized Fibonacci numbers.\n\n\n\n\n\n","category":"method"},{"location":"#AnalyticComb.restricted_sum_comp_gf-Tuple{Any}","page":"Home","title":"AnalyticComb.restricted_sum_comp_gf","text":"restricted_sum_comp_gf(r)\n\nGenerating function for compositions with restricted summand.\n\n\n\n\n\n","category":"method"},{"location":"#AnalyticComb.restricted_sum_part-Tuple{Any, Any}","page":"Home","title":"AnalyticComb.restricted_sum_part","text":"restricted_sum_part(n,r)\n\nNumber of partitions with components in r with restricted summand n.\n\nn must be an integer and r must be a set of integers, like in r = [1,5,10,25] , n = 99.\n\n\n\n\n\n","category":"method"},{"location":"#AnalyticComb.restricted_sum_part_gf-Tuple{Any}","page":"Home","title":"AnalyticComb.restricted_sum_part_gf","text":"restricted_sum_part_gf(r)\n\nGenerating function for partition with restricted summand.\n\n\n\n\n\n","category":"method"},{"location":"#AnalyticComb.stirling_catalan_asym-Tuple{Any}","page":"Home","title":"AnalyticComb.stirling_catalan_asym","text":"stirling_catalan_asym(n)\n\nStirling approximation for n_th Catalan number. (EIS A000108)\n\nfrac4^nsqrtpi n^3\n\n\n\n\n\n","category":"method"},{"location":"#AnalyticComb.stirling_factorial_asym-Tuple{Any}","page":"Home","title":"AnalyticComb.stirling_factorial_asym","text":"stirling_factorial_asym(n)\n\nStirling approximation for n! as (n/exp(1))^nsqrt(2pi*n). (EIS A000142)\n\nn sim sqrt2 pi n fracne^n\n\n\n\n\n\n","category":"method"}]
}
