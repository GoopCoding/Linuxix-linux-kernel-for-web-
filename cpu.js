const{Unicorn,uc_arch,uc_mode}=require("unicorn")
class Emulator{
constructor(){
this.cpu=new Unicorn(uc_arch.UC_ARCH_X86,uc_mode.UC_MODE_32)
this.memory=new Uint8Array(1024*64)
}
execute(instructions){
this.cpu.mem_map(0x1000,this.memory.length)
this.cpu.mem_write(0x1000,instructions)
this.cpu.emu_start(0x1000,0x1000+instructions.length)
console.log("Executed on emulated CPU")
}
}
module.exports=new Emulator()
