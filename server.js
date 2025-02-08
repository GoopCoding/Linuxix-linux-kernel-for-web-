const express=require("express")
const bodyParser=require("body-parser")
const kernel=require("./kernel")
const app=express()
app.use(bodyParser.json())
app.post("/run",(req,res)=>{
const pid=kernel.createProcess("node -e 'console.log(\"Hello from Linuxix\")'")
res.json({message:`Process ${pid} started`})
})
app.post("/syscall",(req,res)=>{
const result=kernel.handleSyscall(1,"getpid",[])
res.json({result})
})
app.listen(3000,()=>console.log("Linuxix running on port 3000"))
