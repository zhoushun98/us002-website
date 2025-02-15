<?php
/* GET请求地址：/api-internal/tradeview/price-history/ldousd/ */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $queryString = $_SERVER['QUERY_STRING'];
    $queryString = preg_replace('/\d{13}/i', '', $queryString);
    $md5Value = md5($queryString);
    header('md5: ' . $md5Value);
    header('Content-Type: application/json');
    $dataFileName = $_SERVER['DOCUMENT_ROOT'] . '/http/data/api-internal_tradeview_price-history_ldousd';
    $file_path = $dataFileName . '.' . $md5Value . '.dat';
    
    if (!file_exists($file_path)) { $file_path = $_SERVER['DOCUMENT_ROOT'] . '/http/data/api-internal_tradeview_price-history_ldousd.97ab1f30a35cc520e7dcbb74bc72e5cb.dat'; }
    ob_end_clean();
    echo file_get_contents($file_path);
}
?>