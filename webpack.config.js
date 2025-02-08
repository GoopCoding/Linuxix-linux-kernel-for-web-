const path=require("path")
module.exports={
entry:"./frontend.jsx",
output:{
path:path.resolve(__dirname,"public"),
filename:"bundle.js"
},
module:{
rules:[
{test:/\.jsx?$/,exclude:/node_modules/,use:{loader:"babel-loader"}}
]
},
mode:"development"
}
