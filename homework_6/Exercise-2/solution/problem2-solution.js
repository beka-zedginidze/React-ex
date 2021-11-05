async function asyncAwait() {
    let promise = new Promise(function(resolve) {

      setTimeout(function() {
          resolve("async/await works!");}, 
          2000);
    });
    console.log(await promise);
  }
  
  asyncAwait();