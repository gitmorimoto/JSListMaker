import {makeList} from './listMakerModule.js';
import {selectListItem} from './listMakerModule.js';
addEventListener('DOMContentLoaded',function(){
    const enter0Object = document.getElementById('enter0');
   
    //const data = [{'a':'x'},{'b':'y'},{'c':'z'}];//オブジェクトの配列
    //console.log('data='+data);
    const inp0Object = document.getElementById('inp0');
    const inp1Object = document.getElementById('inp1');
    const pathToData = 'addItem.php';
    let dataArray = [];
    initList();
    
    enter0Object.addEventListener('click',()=>{
        let k = inp0Object.value;
        let v = inp1Object.value;
        if (!k || !v) {
            alert('キーと値を入力してください');
            return;
        }
        const newItem = {[k]: v};
        //dataArray.push(newItem);
        //console.log('dataArray='+dataArray);
        fetch('addItem.php',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(newItem)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Response from server:', data);
            makeList(data);
            selectListItem();
        })
        .catch(error => {
            console.error('Error:', error);
        });
       
        
        
    })

    function initList(){
        fetch('getInitData.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Initial data from server:', data);
            makeList(data);
            selectListItem();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
})