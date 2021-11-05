function executeFirst(second, executeSecond) {
    console.log('First');
    executeSecond(second);
}

function printSecond(second) {
    console.log('execute' + ' ' + second);
}

setTimeout(executeFirst, 2000, 'Second', printSecond);
