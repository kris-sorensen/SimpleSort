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

*/


// TODO 

// keep adding sorting metods
// //dom manipulation, css, and html.
// //setup interval delay to make smoother sorting
// setup ability to have sorting algorithm display how long it took to sort list. Might need to recursively call the function again and have a booleen variable wrap around the await part of the for loop and not allow those to trigger the second time so that you can get an accurate measurement on how long it takes to sort that array with that algorithm. App would also allow you to compare that same array using one algorithm with other algorithms to find out what one would be the fastest with that size array.
// when they are in the right location have them turn green instead of just at the end.
//? upside down?




// * ARRAY MAKER

let arrayLength = 200;
let array = [];

const container = document.getElementById("graph");

class Array {

    constructor(length, maxValue){
        
        this.length = length;
        this.maxValue = maxValue;
        createArray(array, this.maxValue, this.length);
        setColor(array);
    }

}

const randomNumber = (maxValue)=>{
    return Math.ceil(Math.random() * maxValue);
}

const createArray = (array, maxValue, length)=> {
    for(let i= 0; i < length; i++){
        const value = randomNumber(maxValue);
        array.push(value);
        createHtmlDivs(value, i, length);
    }

    // let block = document.getElementsByClassName("block");
    // block.style.width = `${(widthCalc(length) - 2)}px)`
}

const createHtmlDivs = (value, i, length)=>{ 
    const el = document.createElement("div");
    el.classList.add("block");
    el.setAttribute("id",`_${i}`);
    displayElement(value, i, el, length);  

    // createLabel(el, value);
}



const displayElement = (value, i, el, length)=>{
    el.style.height = `${value * 6}px`;
    el.style.transform = `translate(${i * (widthCalc(length))}px)`;
    el.style.width = `${(widthCalc(length) - 2)}px)`
    container.appendChild(el);
}

const widthCalc = (length) =>{
    if(length < 13)return 45;
    if(length < 26)return 20;
    if(length < 51)return 12;
    if(length < 76)return 8;
    if(length > 76)return 6;
}

const createLabel = (el, value)=>{
    let elLabel = document.createElement("label");
    elLabel.classList.add("block_id");
    elLabel.innerText = value;
    el.appendChild(elLabel);
}
const setColor = (array) =>{
    for(let i in array){
        const el = document.getElementById(`_${i}`);
        el.style.backgroundColor = "var(--color-main)";
    }
}

// let a = new Array(arrayLength, 100);





// * SORTING ALGORITHMS

let selectedAlgorithm = Selection;
let stopped = true;
let speed = 100;


const swap = (array, i, swapIndex)=>{
    const currentEl = document.getElementById(`_${i}`);
    const swapEl = document.getElementById(`_${swapIndex}`);
    currentEl.style.backgroundColor = "var(--color-accent)";
    swapEl.style.backgroundColor = "var(--color-accent)";
};

const swap2 = (array, i, swapIndex)=>{
    const currentEl = document.getElementById(`_${i}`);
    const swapEl = document.getElementById(`_${swapIndex}`);
    
    const current = array[i];
    array[i] = array[swapIndex];
    array[swapIndex] = current;

    displayElement(array[i], i, currentEl);
    displayElement(array[swapIndex], swapIndex, swapEl); //updat label also

    currentEl.style.backgroundColor = "var(--color-main)";
    swapEl.style.backgroundColor = "var(--color-main)";
};



const sortedColor = (array) => {

    for(let i in array){
        const el = document.getElementById(`_${i}`);
        el.style.backgroundColor = "var(--color-secondary)";
    }
};

const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
  }




async function Bubble(array) {

    
    let val = 0;
    let isSorted = true;
    for(let i = 0; i < array.length; i++){

        isSorted = true;

        for(let i = 1; i < array.length - val; i++){
            if(stopped) return;
            if(array[i] < array[i - 1]){

                swap(array, i, i - 1);
                await sleep(speed);
                swap2(array, i, i - 1);
                isSorted = false;
            }
        }
        if(isSorted) {
            sortedColor(array); //update color for bubble sort for each sorted el
            return;
        }
        val++;
    
    }
  
}




async function Selection (array) {
    //n**2 w/ no shortcuts to end early so it is one of the slowest.
    

        let index = 0;
        for(let i = 0; i < array.length; i++){
            let smallestIndex = index;

            for(let j = index; j < array.length; j++){
                if(stopped) return;

                if(array[j+1] < array[smallestIndex]){
                    smallestIndex = j+1;
                }
            }

            swap(array, i, smallestIndex);
            await sleep(speed);
            swap2(array, i, smallestIndex);
            index++; 
        }
        sortedColor(array);
   
}

// const b = Selection(array)


async function Insertion(array){
    
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
    // console.log(arr1, arr2);

    merge(arr1)
    merge(arr2)

}



// * Sliders

const arraySize = document.getElementById("length");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
arraySize.oninput = function() {
    arrayLength = this.value; 
    restart();

//   output.innerHTML = this.value;
}



const sortingSpeed = document.getElementById("speed");

sortingSpeed.oninput =  function() {
    speed = this.value; 
}


const deleteDivs = ()=>{
    
    const block = document.querySelectorAll('.block');
    
    block.forEach(div => {
      div.remove();
    });
};


// * Btns

const sort = document.getElementById("sort");
sort.onclick = function() {
    if(stopped){
        
        stopped = false;
        document.getElementById("sort").textContent = 'Restart';
        selectedAlgorithm(array); 
    }else{
        
        document.getElementById("sort").textContent = 'Sort';
        restart();
    }

}


const restart = ()=>{
    stopped = true;
    deleteDivs();
    array = [];
    new Array(arrayLength, 100);
}


new Array(arrayLength, 100);
