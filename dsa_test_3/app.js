// q1 find indices of two numbers that add up to a target 

var array = [2,7,11,15];
var target = 9
for (i=0;i<array.length;i++){
    for(j= i+1;j<array.length;j++){
        if(array[i]+array[j]==target){
            console.log(i,j);
            
        }

    }
}

var array2= [3,2,4];
var target = 6;
for(i=0;i<array2.length;i++){
    for(j=i+1;j<array2.length;j++){
        if(array2[i]+array2[j]==target){
            console.log(i,j);
            
        }
    }
}

var array3 =[3,3];
var target = 6;
for(i=0;i<array3.length;i++){
    for(j=1;j<array3.length;j++){
        if(array3[i]+array3[j]==target){
            console.log(i,j);
            
        }
    }

// }

// q3  remove specific element from array 

var array =[3,2,2,3];
var target = 3;
function RemoveElement (array){
    
for (i=0;i<array.length;i++){
    if(array[i] !== target){
        console.log(array[i]);
        
    }
    
}

}
console.log(RemoveElement (array));



    var array2 = [0,1,2,2,3,0,4,2];
    var target = 2;
    
    function RemoveElement (array2){
        
    for (i=0;i<array2.length;i++){
        if(array2[i] !== target){
            console.log(array2[i]);
            
        }
    }
    }
    console.log( RemoveElement (array2));
    

var array3 = [1,1,1];
var target =1;
function RemoveElement (array){
    
for (i=0;i<array3.length;i++){
    if(array3[i] !== target){
        console.log(array3[i]);
        
    }
}


}
console.log( RemoveElement (array));


// sum of the number 

var num = 123;
var sum = 0;

for(i=0;i<num.length;i++){
 sum += num[i];
    
    
}

console.log(sum);


// binary search

// var array = [1,2,3,4,5]
// var target = 3;

// function binarySearch (array){
//     let left = 0;
//     let right = array.length -1 ;
//     let midIndex = Math.floor(array.length/2)

//     if(left<=right){

//     }


//     // console.log(midIndex);
    

//     for (i=0;i<array.length;i++){
//         if()
//     }
// }


// intersection of multiple arrays 

// var array =[1,2,3];
// var array2= [3,4,5];
// var array3= [3,6,7];

// for (i=0;i<array.length;i++){
//     for(j=0;j<array2.length;j++){
//         for(k=0;k<array3.length;k++){
//             if (array[i]==array[j]==array[k]) {
//                 console.log(i,j,k);
                
                
//             }
//         }
//     }
// }


// count occurrences of a given character in a string 

var word = "hello";
var target = "l";
var count = 0;
for(i=0;i<word.length;i++){
if(word[i] == target){
    count++
    
    
}
}

console.log(count);

var word = "banana";
var target = "a"

var count = 0;
for (i=0;i<word.length;i++){
    if(word[i] == target){
        count++
    }
}
console.log(count);

var word = "javascript";
var target = "j"

var count = 0;
for (i=0;i<word.length;i++){
    if(word[i] == target){
        count++
    }
}
console.log(count);

// q1  check if array is sorted 


var array = [1,2,3,4];

for (i=0;i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        

if(array[j]-array[i]==1){
    console.log("true");
    
}

}
}

var array = [4,3,2,1];

for (i=0;i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        

if(array[j]-array[i]==1){
    console.log("true");
    
}else{
    console.log("false");
    
}

}
}


var array = [1,3,2,4];

for (i=0;i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        

if(array[j]-array[i]==1){
    console.log("true");
    
}else{
    console.log("false");
    
}

}
}

// q5 duplicate numbers 

var array =[4,3,2,7,8,2,3,1]

for(i=0;i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
            console.log(array[i]);
            
        }
    }
}


var array =[1,1,2]

for(i=0;i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
            console.log(array[i]);
            
        }
    }
}

var array =[1,2,3,4]

for(i=0;i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
            console.log(array[i]);
            
        }
    }
}






