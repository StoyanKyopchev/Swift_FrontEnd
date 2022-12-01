var students = [ "Pesho",
                 "Ivan",
                 "Ana",
                 "Georgi",
                 "Vanya",
                 "Dimitar",
                 "Yavor",
                 "Elizabet",
                 "Mariya",
                 "Simeon"
                ];

var i;
var oddStudents = [];
var evenStudents = [];

for(i = 0; i < students.length; i++) {
    if(i%2) {
        evenStudents.push(students[i]);
    } else {
        oddStudents.push(students[i]);
    }
}

console.log(evenStudents, oddStudents);