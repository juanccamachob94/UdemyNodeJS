function useArguments() {
  console.log(arguments[1]);
}

let anotherArguments = () => {
  console.log(arguments);
}

response = {
  hacerAlgo: function() {
    console.log(arguments[1]);
  }
}

response.hacerAlgo(1,2);


let v = 5;
let another = 32;

if(true) {
  let v = 3;
  another = 40;
}

function cambiar() {
  let another = 75;
}

cambiar();
console.log('v', v);
console.log('another', another);
