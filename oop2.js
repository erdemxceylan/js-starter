import House from "./oop.js";
import { house1 } from "./oop.js";
import { BaseLogger, EmailLogger, FileLogger, SmsLogger } from "./oop3.js";

class HouseService {
   constructor(logger) {
      this.houses = [];
      this.logger = logger;
   }

   list(filterCallback) {
      console.log(!!filterCallback ? this.houses.filter(filterCallback) : this.houses);
   }

   add(house) {
      this.houses.push(house);
      this.logger.log('A new house has been added', house);
   }
}

const logger = new SmsLogger();
const houseService = new HouseService(logger);
const house2 = new House(1, 2, 'S', 50, 7000);

houseService.add(house1);
houseService.add(house2);
houseService.list(h => h.view === 'S');
houseService.list();
