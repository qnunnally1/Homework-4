# Homework-4

**Homework-4 is project that tests contract functions used to set and get instructors..**

## Installation
To use Homework-4, first download this repository by clicking 'Download' or clone this repository to a directory of your choosing in your local environment. Remember this location, as you will have to navigate here to further run the program.

## Dependencies
To use this program efficiently, you will need the following:
  * npm: https://nodejs.org
  * truffle: https://github.com/trufflesuite/truffle
  * ganache-cli: https://github.com/trufflesuite/ganache-cli

## Running Homework-4
Before running, make sure you are located in the folder this project has been cloned or downloaded to. In this folder, we're going to begin by opening up the terminal and running ganache.
```
$ ganache-cli
```
While in the same terminal, open a new tab. In this new tab, we'll proceed by entereing the following commands to compile and deploy the smart contract.
```
$ truffle compile
$ truffle migrate
```

## Courses Contract Functions
Before testing the contract, I'll briefly mention the properties and functions in the Courses smart contract. 
  ### Properties
   This contract houses an Instructor struct, a mapping to the instructors, and an array of each instructor's address.
  
  ### Functions
   * setInstructor() - creates a new instructor and pushes the new instructor's address to the array of addresses
   * getInstructors() - returns a list of the instructors' addresses
   * getInstructors(params) - returns a specific instructor's address
   * countInstructors() - returns the amount of instructors

## Function Tests
Within the 'test' directory, the 'courses.js.' file contains the code for our test.

The first test determines if an instructor has been added by adding an instructor using the contract's setInstructor() function and returns the instructor using the contract's getInstructor() function.
```
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
```

The second test simply adds another instructor for better testing functions like getAllInstructors() and countInstructors(), which work better with more than one instructor.
```
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
```

The third test determines if the instructor at index zero is equal to an instructor that was previously added after using the setInstructor() function.
```
  it("it should get an instructor, specifically the first", function() {
    return Courses.deployed().then(function(instance) {
    	return instance.getInstructor(accounts[0]);
    }).then(function(instructor){
    	assert.equal(instructor[0], 45, "contains the correct age");
    	assert.equal(instructor[1], "Michael", "contains the correct first name");
    	assert.equal(instructor[2], "Scott", "contains the correct last name");
    });
  });
```

The first test determines if all prior added instructors are equal to all the instructors that were previously added after using the setInstructor() function.
```
  it("it should get all instructors, in this case 2", function() {
  	return Courses.deployed().then(function(instance) {
  		return instance.getInstructors();
  	}).then(function(instructor) {
  		assert.equal(instructor[0], accounts[0], "contains the correct address of the first instructor");
  		assert.equal(instructor[1], accounts[1], "contains the correct address of the second instructor");
  	});
  });
```

The last test checks that the count matches the number of instructors previously added after using the setInstructor() function.
```
it("it should get a count of 2 instructors", function() {
  	return Courses.deployed().then(function(instance) {
  		return instance.countInstructors();
  	}).then(function(instructor) {
  		assert.equal(instructor, 2, "contains the correct count of all instructors");
  	});
  });
```

To run these tests enter 
```
truffle test ./test/courses.js
```
or simply
```
truffle test
```

In the terminal, you should see the contract compile and the passing result of each tested function listed above. The result should look similar to that of the results below.
```
✓ it should initialize an instructor (243ms)
✓ it should initialize a second instructor (146ms)
✓ it should get an instructor, specifically the first (62ms)
✓ it should get all instructors, in this case 2 (38ms)
✓ it should get a count of 2 instructors
```
