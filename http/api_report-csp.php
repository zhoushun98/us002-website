<?php
/* POST请求地址：/api/report-csp/ */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $queryString = $_SERVER['QUERY_STRING'];
    $requestBody = file_get_contents('php://input');
    $queryString = preg_replace('/\d{13}/i', '', $queryString);
$requestBody = preg_replace('/\d{13}/i', '', $requestBody);
    $md5Value = md5($queryString . $requestBody);
    header('md5: ' . $md5Value);
    header('Content-Type: application/csp-report');
	header('HTTP/1.1 204');
    $dataFileName = $_SERVER['DOCUMENT_ROOT'] . '/http/data/api_report-csp';
    $file_path = $dataFileName . '.' . $md5Value . '.post.dat';
    
    if (!file_exists($file_path)) { $file_path = $_SERVER['DOCUMENT_ROOT'] . '/http/data/api_report-csp.30967dc14d78fc19678b33fb226cf6ae.post.dat'; }
    ob_end_clean();
    echo file_get_contents($file_path);
}
?>