
//!====Coding Challenge: Student Grading System===
//- Description: Create a simple application that accepts student marks, calculates if the student has passed, failed, or performed exceptionally based on the defined criteria.
//  - Features:
//   - Input for total possible marks and marks obtained.
//   - Calculate if the student has passed (≥ 50%).
//   - Calculate if the student performed exceptionally (≥ 80%).
//   - Compare the student's marks against the class average.
//   - Display results in a user-friendly format.

function studentMarks(marks1, marks2, marks3, marks4, marks5){
    let total = marks1+marks2+marks3+marks4+marks5
    let percentage = (total/500)*100
    let grade = ""
    if(percentage>=80){
        let grade= 'A+'
        console.log(`${grade}`,"Performed well!!")
    } else if(percentage>=50 && percentage<80){
        let grade= 'A'
        console.log(`${grade}`,"Good!!")
    } else if(percentage<50){
        let grade= 'B'
        console.log(`${grade}`, "Need to improve!!")
    }
    
}
studentMarks(60,60,30,60,76)