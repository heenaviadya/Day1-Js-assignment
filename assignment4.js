let square = {
    length: 4,
    breadth: 4,
    showArea1: showArea
}

let rectangle= {
    length: 4,
    breadth: 6,
    showArea2: showArea
}

function showArea()
{
   let area= this.length * this.breadth;
   return area;
  
}

console.log(square.showArea1());
console.log(rectangle.showArea2());
