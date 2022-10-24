export class Items {
   constructor() {
      this.items = [];
   }

   add(...items) {
      items.forEach(item => this.items.push(item));
   }

   list() {
      this.items.forEach(item => console.log(item));
   }

}

export class Courses extends Items {
   filterByCategory(category) {
      return this.items.filter(course => course.category === category);
   }

   filter(callback) {
      return !!callback ? this.items.filter(callback) : this.items;
   }
}