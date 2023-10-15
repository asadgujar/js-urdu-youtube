let abc  = "new value";

// make an iife function to avoid global value and immediately invoked function execution

(()=>{
    console.log(`Db connected ${abc}`);
})();
(function myFunc() {
    console.log(`Db connected two ${abc}`);
})();

function myFunc(){
    console.log(abc);
}
myFunc()

