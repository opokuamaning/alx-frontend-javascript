interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    contract?: boolean;
}

interface Directors extends Teacher{
    numberOfReports: number;
}

interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string){
    return `${firstName[0]}. ${lastName}`;
}

interface StudentConstructor{
    new (firstNamw: string, lastName: string): StudendtClassInterface;
}

interface StudendtClassInterface{
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudendtClassInterface{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

export {printTeacher, StudentClass};