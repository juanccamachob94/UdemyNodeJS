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
