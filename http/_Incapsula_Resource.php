<?php
/* GET请求地址：/_Incapsula_Resource */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $queryString = $_SERVER['QUERY_STRING'];
    $queryString = preg_replace('/\d{13}/i', '', $queryString);
    $md5Value = md5($queryString);
    header('md5: ' . $md5Value);
    /* 查询字符串: SWJIYLWA=719d34d31c8e3a6e6fffd425f7e032f3&ns=1&cb=239971382 */
	if($md5Value == '529cdcacc7ed0698958c5a465b99e69a'){ header('Content-Type: application/javascript'); }
	/* 查询字符串: SWKMTFSR=1&e=0.1673 */
	if($md5Value == '86901ec2bae129e7609cea96cef4bfb7'){ header('Content-Type: text/plain'); }
	/* 查询字符串: SWHANEDL=786384,742565,640950,149265 */
	if($md5Value == '4977b48b46dd30251713f259eacef1f5'){ header('Content-Type: application/javascript'); }
	/* 查询字符串: SWJIYLWA=5074a744e2e3d891814e9a2dace20bd4,719d34d31c8e3a6e6fffd425f7e032f3 */
	if($md5Value == '87b8fc707c2ce11cbc94df35f9f68f96'){ header('Content-Type: application/javascript'); }
    $dataFileName = $_SERVER['DOCUMENT_ROOT'] . '/http/data/_Incapsula_Resource';
    $file_path = $dataFileName . '.' . $md5Value . '.dat';
    
    if (!file_exists($file_path)) { $file_path = $_SERVER['DOCUMENT_ROOT'] . '/http/data/_Incapsula_Resource.529cdcacc7ed0698958c5a465b99e69a.dat'; }
    ob_end_clean();
    echo file_get_contents($file_path);
}
?>