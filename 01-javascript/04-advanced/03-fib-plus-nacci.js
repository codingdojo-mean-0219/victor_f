function fib() {
  var one = 0;
  var two = 1;
  var three = 1;
  function nacci() {
    console.log(three);
    three = one + two;
    one = two;
    two = three;
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
