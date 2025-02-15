<?php
/* GET请求地址：/account/login/ */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $queryString = $_SERVER['QUERY_STRING'];
    $queryString = preg_replace('/\d{13}/i', '', $queryString);
    $md5Value = md5($queryString);
    header('md5: ' . $md5Value);
    header('Content-Type: text/html');
	/* 查询字符串: next=/account/deposit/bank-transfer/ */
	if($md5Value == 'f21e4d3dc7eb388ffd31bcceae7222fe'){ header('HTTP/1.1 301'); header('Location: /onboarding/login/?next=/account/deposit/bank-transfer/'); }
    $dataFileName = $_SERVER['DOCUMENT_ROOT'] . '/http/data/account_login';
    $file_path = $dataFileName . '.' . $md5Value . '.dat';
    
    if (!file_exists($file_path)) { $file_path = $_SERVER['DOCUMENT_ROOT'] . '/http/data/account_login.f21e4d3dc7eb388ffd31bcceae7222fe.dat'; }
    ob_end_clean();
    echo file_get_contents($file_path);
}
?>