
function getUserInState(users, state){
    let res=[];
    for(var i=0; i<users.length; i++){
        if(users[i].state == state){
            res.push(users[i]);
        }
    }
    return res;
}
function avgAge(res){
    let avg=0;
    for(let i=0; i<res.length; i++){
        avg = avg + res[i].age;
    }
    avg  = Math.round(avg/res.length);
    return avg;
}


//Users list
let users = [{id:1, name: 'John', email:'john@example.com', age:30, city: 'NewYork', state:'NY'}, {id:2, name: 'Jane', email:'jane@example.com', age:25, city: 'Chicago', state:'IL'}, {id:3, name: 'Bob', email:'bob@example.com', age:35, city: 'NewYork', state:'NY'}];


//function called
let res = getUserInState(users, 'NY');

// sorted the list
let sortedList = res.sort((p1, p2) => (p1.age > p2.age) ? 1 : (p1.age < p2.age) ? -1 : 0);

//print lsit of users
console.log(sortedList);

let averageAge = avgAge(sortedList);
console.log('averageAge:'+averageAge);