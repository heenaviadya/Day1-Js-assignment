let largeArray = (arr)=>{
    let largest=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>largest)
        {
            largest = arr[i]
        }
    }
    return largest;
    

}
console.log(largeArray([2,3,10,6,8]));
