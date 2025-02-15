<?php
/* POST请求地址：/report/2/xp_amp_appstore_perf */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $queryString = $_SERVER['QUERY_STRING'];
    $requestBody = file_get_contents('php://input');
    $queryString = preg_replace('/\d{13}/i', '', $queryString);
$requestBody = preg_replace('/\d{13}/i', '', $requestBody);
    $md5Value = md5($queryString . $requestBody);
    header('md5: ' . $md5Value);
    header('Content-Type: application/json');
    $dataFileName = $_SERVER['DOCUMENT_ROOT'] . '/http/data/report_2_xp_amp_appstore_perf';
    $file_path = $dataFileName . '.' . $md5Value . '.post.dat';
    
    if (!file_exists($file_path)) { $file_path = $_SERVER['DOCUMENT_ROOT'] . '/http/data/report_2_xp_amp_appstore_perf.3f678842ca85daa07a5f1420f5f34e87.post.dat'; }
    ob_end_clean();
    echo file_get_contents($file_path);
}
?>