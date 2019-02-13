// 30 minutes max
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function call(arr){
    for(var i of arr){
        console.log("Name: "+i.name+", Cohort: "+i.cohort);
    }
}
call(students)


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function call2(object){
    var x =1;
    console.log(`Employees`);
    for(var i of users.employees){
       console.log(x+" - "+i.last_name+", "+i.first_name+" - "+(i.first_name.length+i.last_name.length));
       x++ 
    }
    var x = 1
    console.log(`Managers`);
    for(var i of users.managers){
       console.log(x+" - "+i.last_name+", "+i.first_name+" - "+(i.first_name.length+i.last_name.length));
       x++ 
    }
}
call2(users)
 
