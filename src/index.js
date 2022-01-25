//* MAKE BOARD

/* 
SORT

[] Create class for each sorting algo
[] Have a animate function that updates the color
[] create an array of random size and length with random number from 0-X
    [] advanced: allow the user to select the array length.
    [] visually display random generated array in order using a bar (or what else you come up with) to represent size of number. bigger numbers have longer lines.



HTML/CSS/DOM

[] Slider for array size 
[] Sort btn
[] Sort algorithm drop down menu
[] Put number size at bottom of each bar on graph

DOM

[] update when slider is moved



*Today:


[] 1. Get webpackets working
[] 2. understand canvas (video) 
[] 3. progam dom so that it displays graph based on arrray.






*/

// .NEXT

// Finish with wepack and link pages together.
// keep adding sorting metods
// dom manipulation, css, and html.

// GRAPH


let COLS = 100; // update values when select length of array and max values in array.
let ROWS = 100;
let BLOCK_SIZE = 5;


const canvas = document.getElementById('board');
// const ctx = canvas.getContext('2d');

// Calculate size of canvas from constants.
// ctx.canvas.width = COLS * BLOCK_SIZE *2;
// ctx.canvas.height = ROWS * BLOCK_SIZE;

// Scale blocks
// ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

class Board {
  
    // Reset the board when we start a new game.
    reset() {
      this.grid = this.getEmptyBoard();
    }
    
    // Get matrix filled with zeros.
    getEmptyBoard() {
      return Array.from(
        {length: ROWS}, () => Array(COLS).fill(0)
    );
    }
}


let board = new Board();
console.log('board')



const draw = (array)=>{
    forEach()

}



// * ARRAY MAKER


let array = [];

//should this be in the array class?

class Array {

    constructor(length, maxValue){
        
        this.length = length;
        this.maxValue = maxValue;
        
        this.randomNumber = (maxValue)=>{
            return Math.floor(Math.random()*maxValue) // why not defined
        }
        
        while(this.length > 0){
            array.push(this.randomNumber(this.maxValue))
            this.length--
        }
    }

    
// might need a setter for array?

}


let a = new Array(100, 100)
console.log(array)




// * SORTING ALGORITHMS


const swap = (array, i, swapIndex)=>{
    let current = array[i];
    array[i] = array[swapIndex];
    array[swapIndex] = current;
   
}

class Bubble {

    constructor(array){
        let val = 0;
        let isSorted = true;
        for(let i = 0; i < array.length; i++){
            isSorted = true;
            for(let i = 1; i < array.length - val; i++){
                if(array[i] < array[i - 1]){
                    swap(array, i, i - 1)
                    isSorted = false;
                    // update dom
                }
            }
            if(isSorted) return;
            val++;
        }
    }
    // should have draw(). will be triggered in the animatepage
}


class Selection{
    //n**2 w/ no shortcuts to end early so it is one of the slowest.
    constructor(array){

        let index = 0;
        for(let i = 0; i < array.length; i++){
            let smallest = index;
            for(let j = index; j < array.length; j++){
                if(array[j+1] < array[smallest]){
                    
                    smallest = j+1;
                }
            }
            swap(array, i, smallest)
            index++; 
        }
    }
}

class Insertion{
    constructor(array){
        for(let i = 1; i < array.length; i++){
            
            let current = array[i];
            let j = i - 1;
            
            while(j >= 0 && array[j] > current){
                array[j + 1] = array[j];
                j--;
            }
            array[j+1] = current; 
        }
    }
}

// more space but runs in (n log n)
class Merge {
    
    constructor(array){



    }

    // divide length by 2 use Math.float
        // create 2 new seperate arrays. keep dividing recusively until you have all the pieces broken down into one. create new array at every level (need for loop)
    // use recursion to keep dividing
        //concat?;
}


function merge (array){

    if(array.length <= 1){
        return array
    }
    let mid = Math.floor(array.length/2)
    let arr1 = [];
    let arr2 = [];
    let i = 0;



    while(i <= mid){
        arr1.push(array[i]);
        i++;
    }
    while(i < array.length){
        arr2.push(array[i])
        i++;
    }
    console.log(arr1, arr2);

    merge(arr1)
    merge(arr2)

}





