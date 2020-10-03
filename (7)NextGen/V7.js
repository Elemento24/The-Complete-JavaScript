class Struc {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
};

// =======
// PARKS
// =======

class Park extends Struc {
  constructor(name, buildYear, numTrees, area) {
    super(name, buildYear);
    this.numTrees = numTrees;
    this.area = area;
  }

  calcAge() {
    this.age = new Date().getFullYear() - this.buildYear;
    return this.age;
  }

  calcTreeDen() {
    this.density = (this.numTrees / this.area).toFixed(2);
    return this.density;
  }
};

let parks = new Map();
parks.set(0, new Park(`Johnson's Park`, 1990, 234, 132));
parks.set(1, new Park(`Victoria's Grounds`, 1998, 561, 199));
parks.set(2, new Park(`Company Garden`, 2001, 122, 89));
parks.set(3, new Park(`Greenwall Park`, 1995, 1189, 561));

let avgAge = 0
parks.forEach((val, key) => {
  avgAge += val.calcAge();
});
avgAge /= parks.size;

console.log('-----------PARKS REPORT------------');
console.log(`Our ${parks.size} have an average age of ${avgAge.toFixed(2)} years.`);
parks.forEach((val, key) => {
  console.log(`${val.name} has a Tree Density of ${val.calcTreeDen()} trees per square km.`)
});
parks.forEach((val, key) => {
  if (val.numTrees > 1000) {
    console.log(`${val.name} has more than 1000 Trees.`);
  }
});

// ========
// STREETS
// ========

class Street extends Struc {
  constructor(name, buildYear, length, size = 'Normal') {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }
};

let streets = new Map();
streets.set(0, new Street(`First Street`, 1989, 110));
streets.set(1, new Street(`Wallmart's Street`, 2005, 185, 'Big'));
streets.set(2, new Street(`Love Street`, 2001, 58, 'Small'));

let totLen = 0;
streets.forEach((val, key) => totLen += val.length);
let avgLen = (totLen / streets.size).toFixed(2);


console.log('-----------STREETS REPORT------------');
console.log(`Our ${streets.size} streets have a total length of ${totLen} km, with an average of ${avgLen} km.`);
streets.forEach((val, key) => {
  console.log(`${val.name}, built in ${val.buildYear}, is a ${val.size} street.`);
});
