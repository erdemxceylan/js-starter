class Course {
   constructor(title, desc, image, free, category, instructor) {
      this.title = title;
      this.description = desc;
      this.image = image;
      this.isFree = free;
      this.category = category;
      this.instructor = instructor;
   }
};

class Courses {
   constructor() {
      this.courses = [];
   }

   add(...courses) {
      courses.forEach(course => this.courses.push(course));
   }

   list() {
      this.courses.forEach(course => console.log(course));
   }

   filterByCategory(category) {
      return this.courses.filter(course => course.category === category);
   }

   filter(callback) {
      return !!callback ? this.courses.filter(callback) : this.courses;
   }
}

class Instructor {
   constructor(name, image) {
      this.name = name;
      this.image = image;
   }
};

class Instructors {
   constructor() {
      this.instructors = [];
   }

   add(...instructors) {
      instructors.forEach(instructor => this.instructors.push(instructor));
   }

   list() {
      this.instructors.forEach(instructor => console.log(instructor));
   }
}

const instructor1 = new Instructor('name1', 'image1');
const instructor2 = new Instructor('name2', 'image2');
const js = new Course('JavaScript', 'js-course', 'js-image', true, 'Coding', instructor1);
const angular = new Course('Angular', 'angular-course', 'angular-image', false, 'Coding', instructor2);
const react = new Course('React', 'react-course', 'react-image', true, 'Coding', instructor2);
const cooking = new Course('Cooking', 'cooking-course', 'cooking-image', false, 'Miscellaneous', instructor1);

const courses = new Courses();
courses.add(js, angular, react, cooking);
courses.list();
console.log(courses.filterByCategory('Miscellaneous'));
console.log(courses.filter(course => course.isFree));
console.log(courses.filter(course => course.instructor.name === 'name1'));

// const instructors = new Instructors();

// implement inheritance