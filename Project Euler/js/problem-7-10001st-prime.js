function upper_bound_for_n_prime(n){
  if(n<6){
    return 13;
  }
  return n * (Math.log(n) + Math.log(Math.log(n)))
}

function is_prime_num(num) {
  if (num % 2 === 0 || num % 3 === 0){
    return true;
  }
  var i = 5;
  while (i <= Math.ceil(Math.sqrt(num))) {
    if (num % i === 0)
      return false;
    if (num % (i + 2) === 0)
      return false;
    i+= 6;
  }
  return true;
}

// lets generate the prime numbers give that all prime numbers > 3 are fulfils `6n – 1` or `6n + 1`:
// 6n – 1: → 5, 11, 17, 23, 29, 35, 41, ...
// 6n + 1: → 7, 13, 19, 25, 31, 37, 43, ...
function generate_prime_numbers(n){
  var list_prime_numbers = [2, 3];
  var upper_bound = upper_bound_for_n_prime(n);
  var current_prime = 3;

  var i = 0;
  while(current_prime < upper_bound){
    i+=1;
    current_prime = 6*i - 1;
    if(is_prime_num(current_prime)){
      list_prime_numbers.push(current_prime);
    }
    current_prime = 6*i + 1;
    if(is_prime_num(current_prime)){
      list_prime_numbers.push(current_prime);
    }
  }
  return list_prime_numbers.slice(0, n);
}

function nthPrime(n) {

   var prime_numbers = generate_prime_numbers(n);
  return prime_numbers[prime_numbers.length-1];
}

nthPrime(10001);
