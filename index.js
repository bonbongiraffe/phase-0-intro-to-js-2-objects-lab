// Write your solution in this file!
let employee = {
    name: '',
    streetAddress: ''
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    let clone = {};
    for (let property in employee){
        clone[property] = employee[property];
    }
    clone[key] = value;
    return clone;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}

function deleteEmployeeWithKeyAndValue(employee, key){
    let clone = {};
    for (let property in employee){
        if (property !== key)
            clone[property] = employee[property];
    }
    return clone;
}

function destructivelyDeleteEmployeeWithKeyAndValue(employee, key){
    return;
}
