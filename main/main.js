// Write your cade below:
module.exports=function main(system_input,user_input){
    let number_a=getA(system_input,user_input);
    //console.log("a="+number_a);
    let number_b=getB(system_input,user_input);
    //console.log(number_b);
   return printOut(number_a,number_b);
}
function getA(system_input,user_input){
    let a_count=0;
    for(let i in system_input){
        user_input.filter((value,index)=>index==i && system_input[i]==value && a_count++);
    }
    return a_count;
}
function getB(system_input,user_input){
    let b_count=0;
    for(let i in system_input){
        user_input.filter((value,index)=>{
            if(value==system_input[i] && i!=index){
//console.log("值为"+system_input[i]+"i="+i);
                delete system_input[i];
                return b_count++;
            }
        });
    }
   // console.log("b"+b_count);
    return b_count;
}

function printOut(number_a,number_b){
    let str='';
    str=`${number_a}A${number_b}B`;
   // console.log("str="+str);
    return str;
}