function countStudents(path) {
    try {
        console.log("Test run")
    }
    catch (err){
        throw new Error('Cannot load the database')
    }
}

module.exports = countStudents;
