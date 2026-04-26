<?php


?>

<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta name="viewport" content="width=device-width,initial-scale=1">
       
  	    <script type="module" src="./js/index.js"></script>
        <style>
            body{background:black;color:white}
            #listContainer{width:200px;height:600px;border:1px solid white;overflow-y:scroll}
            #dataSource{width:400px;height:600px;border:1px solid white}
            #inp0{background:darkgreen;color:white}
            #inp1{background:darkgreen;color:white}
            #showVal{width:400px;height:40px;border:1px solid white}
        </style>
    </head>
    <body>
        <div id="wrap0" style="display:flex">
            <div id="listContainer">

            </div>
            <div id="dataSource">
                key<input id="inp0"><br>
                value<input id="inp1">
                <button id="enter0">enter</button>
                
            </div>
            <div id="showVal"></div>
        </div>
        

    </body>
</html>