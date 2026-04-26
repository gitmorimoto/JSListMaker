<?php
$json = file_get_contents('data.json');
$data = json_decode($json,true);
echo json_encode($data,JSON_UNESCAPED_UNICODE);

?>