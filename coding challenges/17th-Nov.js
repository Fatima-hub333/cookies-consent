function Solution(){
   //Write your code here
   var stack =  [];
   var queue = [];
 this.pushCharacter=function(char){
       stack.push(char);
   }
 this.enqueueCharacter = function(char){
       queue.push(char);
   }
 this.popCharacter = function(){
       return stack.pop();
   }
 this.dequeueCharacter = function(){
       return queue.shift();
   }
 }


 // [Interfaces Challenge]