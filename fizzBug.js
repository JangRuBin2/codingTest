// i가 3과 5의 배수인 경우 FizzBuzz를 출력.
// 3의 배수면 Fizz, 5의 배수인 경우엔 Buzz출력.
// i가 3 혹은 5의 배수가 아니면 i 값을 그대로 출력
function fizzBug(n) {
  for(let i=1; i<=n; i++) {
    if(i % 3===0 && i % 5===0) {
      console.log('FizzBuzz');
    } else if (i % 3===0) {
      console.log('Fizz');
    } else if (i % 5===0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
fizzBug(15);