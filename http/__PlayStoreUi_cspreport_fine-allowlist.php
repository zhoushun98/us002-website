<?php
/* POST请求地址：/_/PlayStoreUi/cspreport/fine-allowlist */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $queryString = $_SERVER['QUERY_STRING'];
    $requestBody = file_get_contents('php://input');
    $queryString = preg_replace('/\d{13}/i', '', $queryString);
$requestBody = preg_replace('/\d{13}/i', '', $requestBody);
    $md5Value = md5($queryString . $requestBody);
    header('md5: ' . $md5Value);
    header('Content-Type: text/html');
	header('HTTP/1.1 204');
    $dataFileName = $_SERVER['DOCUMENT_ROOT'] . '/http/data/__PlayStoreUi_cspreport_fine-allowlist';
    $file_path = $dataFileName . '.' . $md5Value . '.post.dat';
    
    if (!file_exists($file_path)) { $file_path = $_SERVER['DOCUMENT_ROOT'] . '/http/data/__PlayStoreUi_cspreport_fine-allowlist.6951f926990d332c44a21c5f61ede54c.post.dat'; }
    ob_end_clean();
    echo file_get_contents($file_path);
}
?>