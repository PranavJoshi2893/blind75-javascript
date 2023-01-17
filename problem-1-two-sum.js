//bruteforce--------------------------
const sum=4;
const arr=[2,1,5,3];
const twoSum=function(){
    for(let i=0;i<arr.length-1;i++) {
        for(let j=i+1;j<arr.length;j++){
            if(sum===arr[i]+arr[j]){
                return temp=[i,j]
            }
        }
        
    }
}
console.log(twoSum());