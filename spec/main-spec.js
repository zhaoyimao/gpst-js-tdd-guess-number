const main = require('../main/main');

describe('main()', () => {
 it('系统为“1234”,用户输入”1234"',()=>{
     let system_input=[1,2,3,4];
     let user_input=[1,2,3,4];
     let result=main(system_input,user_input);
     expect(result).toEqual('4A0B');
 });
 it('系统给出“1234",用户输入”4321"',()=>{
     let system_input=[1,2,3,4];
     let user_input=[4,3,2,1];
     let result=main(system_input,user_input);
     expect(result).toEqual('0A4B');
 });
 it('系统给出“2431",用户输入"3321"',()=>{
     let system_input=[2,4,3,1];
     let user_input=[3,3,2,1];
     let result=main(system_input,user_input);
     expect(result).toEqual('1A2B');

 });
});