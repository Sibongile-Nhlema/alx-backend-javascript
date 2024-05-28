export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;
  const departments = Object.values(report.allEmployees);

  return {
    next() {
      const currentDepartment = departments[currentDepartmentIndex];
      if (currentDepartmentIndex < departments.length) {
        if (currentEmployeeIndex < currentDepartment.length) {
          const employee = currentDepartment[currentEmployeeIndex];
          currentEmployeeIndex += 1; // Increment currentEmployeeIndex
          return { value: employee, done: false };
        }
        currentDepartmentIndex += 1; // Increment currentDepartmentIndex
        currentEmployeeIndex = 0;
        return this.next();
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
