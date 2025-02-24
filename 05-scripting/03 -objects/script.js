import PromptSync from "prompt-sync";
const prompt = PromptSync();
const number = prompt("How many?")
console.log(number);

/* THis function will take 5 students as an input and then will return them*/
function readStudents() {
    const students = [];
    for(let i=0; i<5; i++){
        students.push({
            name: prompt("Name: "),
            gender: prompt("Gender: "),
            grade: Number(prompt("Grade: ")),
            age: Number(prompt("Age: ")),
        });
    }
    return students
}

//const students = readStudents();

const students =
    [
        { name: "John", gender: "Male", grade: 85, age: 23 },
        { name: "Jane", gender: "Female", grade: 77, age: 31 },
        { name: "Dohn", gender: "Male", grade: 92, age: 29 },
        { name: "Fane", gender: "Female", grade: 63, age: 20 },
        { name: "Xohn", gender: "Male", grade: 54, age: 22 },
    ];


console.log(students);

const youngest = students.reduce(
    (youngest, student) => (student.age < youngest.age ? student: 
        youngest), 
        students[0]
);

console.log(youngest);

const oldest = students.reduce(
    (oldest, student) => (student.age > oldest.age ? student: 
        oldest), 
        students[0]
)

console.log(oldest);

const average = 
students.reduce((sum, student) => sum + student.age, 0) / students.length;
console.log(average);



