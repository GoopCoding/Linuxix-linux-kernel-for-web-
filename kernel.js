const{fork}=require("child_process")
const syscalls=require("./syscalls")
class LinuxixKernel{
constructor(){
this.processes={}
this.pidCounter=1
}
createProcess(command){
const pid=this.pidCounter++
const proc=fork(command)
this.processes[pid]=proc
console.log(`Process ${pid} started`)
return pid
}
handleSyscall(pid,call,args){
if(!this.processes[pid])return `Error: Process ${pid} not found.`
return syscalls.execute(call,args)
}
terminateProcess(pid){
if(this.processes[pid]){
this.processes[pid].kill()
delete this.processes[pid]
return `Process ${pid} terminated.`
}
return `Process ${pid} not found.`
}
}
module.exports=new LinuxixKernel()
