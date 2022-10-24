import { Items, Courses } from './items.js';

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

class Instructor {
   constructor(name, image) {
      this.name = name;
      this.image = image;
   }
};

const instructor1 = new Instructor('name1', 'image1');
const instructor2 = new Instructor('name2', 'image2');

const instructors = new Items();
instructors.add(instructor1, instructor2);

const js = new Course('JavaScript', 'js-course', 'js-image', true, 'Coding', instructor1);
const angular = new Course('Angular', 'angular-course', 'angular-image', false, 'Coding', instructor2);
const react = new Course('React', 'react-course', 'react-image', true, 'Coding', instructor2);
const cooking = new Course('Cooking', 'cooking-course', 'cooking-image', false, 'Miscellaneous', instructor1);

const courses = new Courses();
courses.add(js, angular, react, cooking);

instructors.list();
courses.list();
console.log(courses.filterByCategory('Miscellaneous'));
console.log(courses.filter(course => course.isFree));
console.log(courses.filter(course => course.instructor.name === 'name1'));
