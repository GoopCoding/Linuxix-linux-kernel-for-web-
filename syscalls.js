const syscall=require("syscall")
module.exports={
execute:(call,args)=>{
try{return syscall(call,...args)}
catch(error){return `Syscall error: ${error.message}`}
},
openFile:(path)=>{
try{
const fd=syscall.open(path,syscall.O_RDONLY,0)
const data=syscall.read(fd,1024)
syscall.close(fd)
return `File Data: ${data.toString()}`
}catch(error){return `File error: ${error.message}`}
}
}
