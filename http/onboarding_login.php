<?php
/* GET请求地址：/onboarding/login/ */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $queryString = $_SERVER['QUERY_STRING'];
    $queryString = preg_replace('/\d{13}/i', '', $queryString);
    $md5Value = md5($queryString);
    header('md5: ' . $md5Value);
    header('Content-Type: text/html');
    $dataFileName = $_SERVER['DOCUMENT_ROOT'] . '/http/data/onboarding_login';
    $file_path = $dataFileName . '.' . $md5Value . '.dat';
    
    if (!file_exists($file_path)) { $file_path = $_SERVER['DOCUMENT_ROOT'] . '/http/data/onboarding_login.d41d8cd98f00b204e9800998ecf8427e.dat'; }
    ob_end_clean();
    echo file_get_contents($file_path);
}
?>