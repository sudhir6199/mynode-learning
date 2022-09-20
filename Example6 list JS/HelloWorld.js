let list_message=[1,2,'sudhir','salesforce'];
console.log(list_message);
console.log(list_message[0]);

//updated element
list_message[0]='speed';
console.log(list_message[0]);

//new element
list_message[4]='newelement';
console.log(list_message);

//skipped one element in betwn
list_message[6]='skiped element';
console.log(list_message);

//index of value
console.log(list_message.indexOf('sudhir'));

//reverse list
console.log(list_message.reverse());

//delete element
delete list_message[6]
console.log(list_message);

//list length
console.log(list_message.length);
