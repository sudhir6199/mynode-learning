 Thread is part of process.</br>
 Process can start multiple threads.</br>
 Which means that multiple threads started under process share the memory space allocated for that process.</br></br></br>
 
cluster module & child module creates process not threads so uses available cpu's and creating multiple process not recommended for cpu intensive tasks but difference between cluster & child module is: </br></br>

cluster is implemented on top of child_process, The extra stuff/advantage that cluster.fork brings is that: cluster will enable its process to listen on a same shared port runs simultaneously on their own single thread(own memory with it's own Node (v8) instance) but with child_process module also creates process not threads but with this port cant be shared, just use  So yeah, use cluster for web servers and child_process for workers. </br></br></br>


worker_threads module uses threads unlike cluster and child modules which uses process for workers.</br>
https://www.geeksforgeeks.org/node-js-worker-threads/