<?php
$test = array();

$response1 = array();
$response1["id"] = "1";
$response1["title"] = "盘点习近平10句反腐硬话为官四要";
$response1["author"] = "111";

$response2 = array();
$response2["id"] = "2";
$response2["title"] = "国内油价四连跌 93号汽油重回5元时代";
$response2["author"] = "222";

$response3 = array();
$response3["id"] = "3";
$response3["title"] = "媒体:周本顺善帮政法委旧领导处理麻烦";
$response3["author"] = "333";

$data1 = array();
array_push($data1, $response1, $response2, $response3);

$response4 = array();
$response4["id"] = "1";
$response4["title"] = "美的少东家陷做空疑云 旗下基金账户被查";
$response4["author"] = "444";

$data2 = array();
array_push($data2, $response4);

$response5 = array();
$response5["id"] = "1";
$response5["title"] = "美的少东家陷做空疑云 旗下基金账户被查";
$response5["author"] = "444";

$data3 = array();
array_push($data3, $response5);

$test['news'] = $data1;
$test['images'] = $data2;
$test['music'] = $data3;

$test['errorcode'] = 0;

echo json_encode($test);

?>  