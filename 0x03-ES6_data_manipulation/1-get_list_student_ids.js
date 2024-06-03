export default function getListStudentIds(arrayOfObjs) {
    if (!Array.isArray(arrayOfObjs)) {
        return [];
    }
    const arr = arrayOfObjs.map(student => student.id)
    return arr;
}