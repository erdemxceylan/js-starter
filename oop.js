class House {
   constructor(numberOfRooms, floor, location, monthlyFee, price) {
      this.numberOfRooms = numberOfRooms; // this.numberOfRooms; would not be enough even though the property name is the same as the given parameter's  
      this.floor = floor;
      this.location = location;
      this.monthlyFee = monthlyFee;
      this.price = price;
   }

   introduce() {
      console.log(this);
   }
}

function createHouse(numberOfRooms, floor, location, monthlyFee, price) { // this function is now regarded as a constructor function
   this.numberOfRooms = numberOfRooms;
   this.floor = floor;
   this.location = location;
   this.monthlyFee = monthlyFee;
   this.price = price;
};

createHouse.prototype.introduce = function () {
   console.log(this);
};

const house1 = new House(3, 2, 'N', 100, 5000);
const house2 = new createHouse(1, 2, 'S', 50, 7000);

house1.introduce();
house2.introduce();