pragma solidity ^0.5.0;

contract Courses {
	
	struct Instructor {
		uint age;
		string fName;
		string lName;
	}	

	mapping (address => Instructor) instructors;
	address[] public instructorAccts;

	function setInstructor(address _address, uint _age, string memory _fName, string memory _lName) public {
        Instructor storage instructor = instructors[_address];

        instructor.age = _age;
        instructor.fName = _fName;
        instructor.lName = _lName;
        
        instructorAccts.push(_address) -1;

    }

    function getInstructors() view public returns (address[] memory) {
        return instructorAccts;
    }

    function getInstructor(address ins) view public returns (uint, string memory, string memory) {
        return (instructors[ins].age, instructors[ins].fName, instructors[ins].lName);
    }

    function countInstructors() view public returns (uint) {
        return instructorAccts.length;
    }
}
			