var Courses = artifacts.require('./Courses.sol');

contract('Courses', function(accounts) {

	// Tests setInstructor() fucntion
	// This test determines if an instructor has been added by adding an instructor using 
	// setInstructor() and returns this instructor using getInstructor()
  it("it should initialize an instructor", function() {
    return Courses.deployed().then(function(instance) {
    	instance.setInstructor(accounts[0], 45, "Michael", "Scott");
    	return instance.getInstructor(accounts[0]);
    }).then(function(instructor){
    	assert.equal(instructor[0], 45, "contains the correct age");
    	assert.equal(instructor[1], "Michael", "contains the correct first name");
    	assert.equal(instructor[2], "Scott", "contains the correct last name");
    });
  });

	// This adds another instructor for better testing getAllInstructors() and countInstructors()
  it("it should initialize a second instructor", function() {
    return Courses.deployed().then(function(instance) {
    	instance.setInstructor(accounts[1], 45, "Michael", "Scott");
    	return instance.getInstructor(accounts[1]);
    }).then(function(instructor){
    	assert.equal(instructor[0], 45, "contains the correct age");
    	assert.equal(instructor[1], "Michael", "contains the correct first name");
    	assert.equal(instructor[2], "Scott", "contains the correct last name");
    });
  });

	// Tests getInstructors() function
	// This test determines if the instructor at index zero is equal to an instructor that was previously 
	// added using setInstructor()
  it("it should get an instructor, specifically the first", function() {
    return Courses.deployed().then(function(instance) {
    	return instance.getInstructor(accounts[0]);
    }).then(function(instructor){
    	assert.equal(instructor[0], 45, "contains the correct age");
    	assert.equal(instructor[1], "Michael", "contains the correct first name");
    	assert.equal(instructor[2], "Scott", "contains the correct last name");
    });
  });

	// Tests getInstructor() function
	// This test determines if all prior added instructors are equal to all instructors previously added
	// using setInstructor()
  it("it should get all instructors, in this case 2", function() {
  	return Courses.deployed().then(function(instance) {
  		return instance.getInstructors();
  	}).then(function(instructor) {
  		assert.equal(instructor[0], accounts[0], "contains the correct address of the first instructor");
  		assert.equal(instructor[1], accounts[1], "contains the correct address of the second instructor");
  	});
  });

	// Tests countInstructors() function
	// This test determines if the count matches the number of instructors previously added using setInstructor()
  it("it should get a count of 2 instructors", function() {
  	return Courses.deployed().then(function(instance) {
  		return instance.countInstructors();
  	}).then(function(instructor) {
  		assert.equal(instructor, 2, "contains the correct count of all instructors");
  	});
  });

});