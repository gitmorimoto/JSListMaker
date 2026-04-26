<?php
$newItem = json_decode(file_get_contents('php://input'),true);
$dataArray = [];
$path = 'data.json';

// 既存データ読み込み
if (file_exists($path)) {
    $json = file_get_contents($path);
    $dataArray = json_decode($json, true);
    //print_r($dataArray);
} else {
    $dataArray = [];
}

// 新しいデータ
//$newItem = ["a" => "x"];

// 配列に追加
$dataArray[] = $newItem;

// 保存
file_put_contents(
    $path,
    json_encode($dataArray, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)
);
echo json_encode($dataArray,JSON_UNESCAPED_UNICODE);
?>