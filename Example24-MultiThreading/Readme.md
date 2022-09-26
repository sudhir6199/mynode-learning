 Thread is part of process.</br>
 Process can start multiple threads.</br>
 Which means that multiple threads started under process share the memory space allocated for that process.</br></br></br>

cluster is a cluster of child processes i.e. creates and manages child processes. </br> 
cluster/childprocess are for synchronous JS code. </br>  
cluster module & child module creates process not threads so uses available cpu's and creating multiple process not recommended for cpu intensive tasks but difference between cluster & child module is: </br></br>

cluster is implemented on top of child_process, The extra stuff/advantage that cluster.fork brings is that: cluster will enable its process to listen on a same shared port runs simultaneously on their own single thread(own memory with it's own Node (v8) instance) but with child_process module also creates process not threads but with this port cant be shared, just use  So yeah, use cluster for web servers and child_process for workers. </br></br></br>


worker_threads module has single process and can create multiple threads under a single process it has unlike cluster and child modules which uses process for each workers/threads.</br>
https://www.geeksforgeeks.org/node-js-worker-threads/ </br></br>


Nodejs Worker threads - How many workers should I spawn in the pool?</br>
https://stackoverflow.com/questions/66478813/nodejs-worker-threads-how-many-workers-should-i-spawn-in-the-pool#:~:text=for%20example%2C%20node%20uses%204,maxWorkers%20is%20set%20to%203. </br>
Worker threads share memeory</br></br>

child_process, worker_threads modules preffered for synchronous js code</br>

Workerpools: https://www.npmjs.com/package/workerpool </br>
workerpools module is advance module over the cluster, child_process, worker_threads modules i.e. workerpools can also manage the distribution of load to threads dynamically based on the CPUs available</br>
workerpools module distrubutes the load based on number of CPUs availablity by creating and managing threads.</br>
workerpools creates pool of workers supports worker_threads, child_process, cluster.</br>

workerpools can be used for both frontend(javascript) and backend(nodejs) aside worker_threads only works for backend(nodejs).</br>
