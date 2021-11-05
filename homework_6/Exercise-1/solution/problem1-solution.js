class ClassEx1 {
    constructor(oldPrice, newPrice, myAge) {
      this.oldPrice = oldPrice;
      this.newPrice = newPrice;
      this.myAge = myAge
    }
    difference(x, y) {
      return x - y;
    }

    birthYear(curYear) {
        return curYear - this.myAge
    }
  }
  

let priceDifference = new ClassEx1();

console.log("Price difference between old and new product is: " + priceDifference.difference(100, 80));

let date = new Date();
let CurrentYear = date.getFullYear();

let birthDate = new ClassEx1(2, 2, 20);

console.log("Year: " ,birthDate.birthYear(CurrentYear));