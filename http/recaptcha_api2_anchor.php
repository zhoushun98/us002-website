<?php
/* GET请求地址：/recaptcha/api2/anchor */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $queryString = $_SERVER['QUERY_STRING'];
    $queryString = preg_replace('/\d{13}/i', '', $queryString);
    $md5Value = md5($queryString);
    header('md5: ' . $md5Value);
    header('Content-Type: text/html');
    $dataFileName = $_SERVER['DOCUMENT_ROOT'] . '/http/data/recaptcha_api2_anchor';
    $file_path = $dataFileName . '.' . $md5Value . '.dat';
    
    if (!file_exists($file_path)) { $file_path = $_SERVER['DOCUMENT_ROOT'] . '/http/data/recaptcha_api2_anchor.c3e0ba114ff20cbc57e5185b18de5c61.dat'; }
    ob_end_clean();
    echo file_get_contents($file_path);
}
?>