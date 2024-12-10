const studentDB = ['husan', 'aslbek','rose','lili','jimin']
function findStudents(allStudents, studentName){
    for(let i = 0; i<allStudents.length;i++){
        if(allStudents[i]===studentName){
            console.log(`Found ${studentName}`)
        }
    }
}
findStudents(studentDB,'rose')