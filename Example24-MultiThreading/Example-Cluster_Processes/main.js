var cluster = require('cluster');

//Run the code three times, the first time is as a master, then as workers:

if (cluster.isWorker) {  //Dosen't enter for master only worker allowed.
  console.log('I am a worker');
} else {           //Dosen't enter for worker only master allowed.
  console.log('I am a master');
  cluster.fork(); //Note this is in else condtion enters only for master, This will trigger along with Worker2 & Worker1 run this code again
  cluster.fork(); //Note this is in else condtion enters only for master, This will trigger along with Worker2 & Worker2 run this code again
  console.log("Both workers triggered.")
}