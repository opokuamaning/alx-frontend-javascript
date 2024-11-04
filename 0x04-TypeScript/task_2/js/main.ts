interface DirectorInterface{
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface{
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface{
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface{
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string){
  if(typeof salary === 'number' && salary < 500){
    return new Teacher();
  }else{
    return new Director();
  }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));


function isDirector(employee: Teacher | Director): boolean{
  return (employee instanceof Director);
}

function executeWork(employee: Teacher | Director){
  if(employee instanceof Director){
    return employee.workDirectorTasks();
  }else{
    return employee.workTeacherTasks();
  }
}

// String literal types

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string{
  if(todayClass === 'Math'){
    return 'Teaching Math';
  }else if(todayClass === 'History'){
    return 'Teaching History';
  }
}