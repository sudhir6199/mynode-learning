const company="firm"
let list_message={
    name:"sudhir",
    job:"mts",
    fun1:()=> "Hey",
    [company]:"salesforce"
};
console.log(list_message);

//pull value.
console.log(list_message.firm) //Here its not company instead we used the value of company i.e.e firm

//update key value
list_message.name="sudhir tataraju"
console.log(list_message);



