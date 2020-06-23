// steps to run this file 
// 1. Install nodejs to your system
// 2. run the file inside the terminal -> node "filename.js"


// () => 

var teacher1 = {  // this -> outer context
    name: 'tushar',
    age: 23,
    fullDetails: function() {
        var details = () => {
            console.log(`Name of teacher is ${this.name} and age is ${this.age}`)
        }

        details();
    }
    
}

teacher1.fullDetails();


// this - reference

// function()

var student1 = {  // this - current context
    name: 'tushar',
    age: 23,
    fullDetails: function() {
        console.log(`Name is ${this.name} and age is ${this.age}`)
    }
    
}


var student2 = {  // this
    name: 'kumar',
    age: 25,
    fullDetails: function() {
        console.log(`Name is ${this.name} and age is ${this.age}`)
    }
    
}


