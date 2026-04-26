console.log('module loaded');
/*
A list is made from the data. The data is an array of objects, 
and each object has a key and a value.
*/
export function makeList(data)
{
    console.log('data='+data);
    if (typeof data === "string") {
    try {
        data = JSON.parse(data);
    } catch (e) {
        console.error("Invalid JSON:", e);
    }
}
/*
The catch part is what handles errors that happen inside the try block.

if (typeof data === "string") {
    try {
        data = JSON.parse(data);
    } catch (e) {
        console.error("Invalid JSON:", e);
    }
}
What catch does
If something inside try { ... } fails (throws an error), execution jumps to catch.
The variable e (you can name it anything) contains information about that error.
In this specific case
What can go wrong?

JSON.parse(data) will throw an error if data is not valid JSON.

Example:

let data = "hello"; // not valid JSON
JSON.parse(data);   // ❌ error happens
How catch works here
catch (e) {
    console.error("Invalid JSON:", e);
}
e = the error object (contains message, stack, etc.)
console.error(...) prints the error to the console
The program does not crash — it continues running
Without catch
let data = "hello";
data = JSON.parse(data); // ❌ program stops here with error
With catch
let data = "hello";

try {
    data = JSON.parse(data);
} catch (e) {
    console.error("Invalid JSON:", e);
}

console.log("Program continues"); // ✅ still runs
What is inside e?

Example output:

Invalid JSON: SyntaxError: Unexpected token h in JSON...

So e usually includes:

Error type (e.g., SyntaxError)
Message (what went wrong)
Why this is important

This pattern makes your code safe and robust:

Prevents crashes
Helps debugging
Lets you handle bad data gracefully
Optional improvement

You might want to handle the failure more clearly:

catch (e) {
    console.error("Invalid JSON:", e);
    data = null; // or fallback value
}
*/
    
    const list = document.createElement('ul');
    const container = document.getElementById('listContainer');
    
    container.appendChild(list);
    data.forEach((item) => {
        Object.entries(item).forEach(([k, v]) => {
            console.log(k + ': ' + v);
        
            let li = document.createElement('li');
            let keySpan = document.createElement('span');
            keySpan.textContent = k + ': ';
            let valueSpan = document.createElement('span');
            valueSpan.textContent = v;
            valueSpan.style.opacity= '0'; // 値を非表示にする
            li.appendChild(keySpan);
            li.appendChild(valueSpan);
            
            list.appendChild(li);
        });
    });
    if(container.firstChild) {
        container.removeChild(container.firstChild);
        container.appendChild(list);
    }
    
}

export function selectListItem() {
    const listItems = document.querySelectorAll('#listContainer li');

    listItems.forEach(li => {
        const keySpan = li.querySelector('span:nth-of-type(1)');
        const valueSpan = li.querySelector('span:nth-of-type(2)');
        const showValObj = document.getElementById('showVal');
        console.log('keySpan='+keySpan);
        if (!keySpan) return;

        keySpan.addEventListener('click', () => {
            keySpan.style.color = 'red';
            console.log('Selected value: ' + valueSpan.textContent);
            console.log('Selected key: ' + li.firstChild.textContent);
            showValObj.textContent = 'Selected: ' + keySpan.textContent+":"+ valueSpan.textContent;    
        });
    });
}

