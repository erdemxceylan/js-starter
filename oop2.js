class House {
   constructor(numberOfRooms, floor, location, monthlyFee, price) {
      this.numberOfRooms = numberOfRooms;
      this.floor = floor;
      this.location = location;
      this.monthlyFee = monthlyFee;
      this.price = price;
   }

   introduce() {
      console.log(this);
   }
}

class HouseService {
   constructor() {
      this.houses = [];
   }

   list(filterCallback) {
      console.log(!!filterCallback ? this.houses.filter(filterCallback) : this.houses);
   }

   add(house) {
      this.houses.push(house);
   }
}

const houseService = new HouseService();
const house1 = new House(3, 2, 'N', 100, 5000);
const house2 = new House(1, 2, 'S', 50, 7000);
houseService.add(house1);
houseService.add(house2);

houseService.list(h => h.location === 'S');
houseService.list();
