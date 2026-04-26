console.log('module loaded');
export function makeList(data)
{
    console.log('data='+data);
     if (typeof data === "string") {
        data = JSON.parse(data);
    }
    console.log('data='+data);
    const list = document.createElement('ul');
    const container = document.getElementById('listContainer');
    console.log('container='+container);
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

