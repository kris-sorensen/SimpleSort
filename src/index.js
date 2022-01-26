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

// .NEXT

// keep adding sorting metods
// dom manipulation, css, and html.
// setup interval delay to make smoother sorting




// * ARRAY MAKER


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
    return Math.ceil(Math.random()*maxValue) // why not defined
    
}
const createArray = (array, maxValue, length)=> {
    for(let i= 0; i < length; i++){
        const value = randomNumber(maxValue);
        array.push(value);
        createHtmlDivs(value, i);
    }
}

const createHtmlDivs = (value, i)=>{ 
    const el = document.createElement("div");
    el.classList.add("block");
    el.setAttribute("id",`_${i}`);
    displayElement(value, i, el);  
    // createLabel(el, value);
}



const displayElement = (value, i, el)=>{
    el.style.height = `${value * 3}px`;
    el.style.transform = `translate(${i * 30}px)`;
    container.appendChild(el);
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

let a = new Array(20, 100);
console.log(array);




// * SORTING ALGORITHMS


const swap = (array, i, swapIndex)=>{
    
    const currentEl = document.getElementById(`_${i}`);
    const swapEl = document.getElementById(`_${swapIndex}`);
    currentEl.style.backgroundColor = "var(--color-accent)";
    swapEl.style.backgroundColor = "var(--color-accent)";
    
    const current = array[i];
    array[i] = array[swapIndex];
    array[swapIndex] = current;

    displayElement(array[i], i, currentEl);
    displayElement(array[swapIndex], swapIndex, swapEl); //updat label also

    currentEl.style.backgroundColor = "var(--color-main)";
    swapEl.style.backgroundColor = "var(--color-main)";
}

const sortedColor = (array) => {

    for(let i in array){
        const el = document.getElementById(`_${i}`);
        el.style.backgroundColor = "var(--color-secondary)";
    }
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
            if(isSorted) {
                sortedColor(array);
                return; // turn all green or done color
            }
            val++;
        }
    }
  
}

// const b = new Bubble(array)
console.log(array)


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
        sortedColor(array);
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
    // console.log(arr1, arr2);

    merge(arr1)
    merge(arr2)

}





