$(document).ready(function () {

  // send an HTTP DELETE request for the sign-out link
  $('a#sign-out').on("click", function (e) {
    e.preventDefault();
    var request = $.ajax({ url: $(this).attr('href'), type: 'delete' });
    request.done(function () { window.location = "/"; });
  });


function Animal(inp_name, inp_legs) {
    this.name=inp_name;
    this.legs=inp_legs;
};


Animal.prototype = {
  biped: function() {
      if (this.legs === 2) return true 
  quadraped: function() {
      if (this.legs === 4) return true 
};

var Zoo = {
  
  init: function(animal_array){
    this.animals = animal_array
  }

  bipeds: function() {
    var biped_array = this.animals.filter( biped() )
    return biped_array
  }
 
  quadrapeds: function() {
    var quad_array = this.animals.filter( quadraped() )
    return quad_array
  }

};


function assert(test, message) {  
  if (!test) {
    throw "ERROR: " + message;
  }
  return true;
}

var animals = [
  new Animal("Human", 2),
  new Animal("Monkey", 2),
  new Animal("Kangaroo", 2),
  new Animal("Horse", 4),
  new Animal("Cow", 4),
  new Animal("Centipede", 100)
];

Zoo.init(animals);

assert(
  Zoo.bipeds().length === 3, "the Zoo should have 3 bipeds"
);
assert(
  Zoo.quadrupeds().length === 2, "the Zoo should have 2 bipeds"
);
assert(
  animals[0].identify() === "I am a Human with 2 legs.", "humans have 2 legs"
);
assert(
  animals[2].name === "Kangaroo", "expected 'Kangaroo'"
);
assert(
  animals[0].identify === animals[5].identify, "only one implementation of the identify() function should exist"
);


});
