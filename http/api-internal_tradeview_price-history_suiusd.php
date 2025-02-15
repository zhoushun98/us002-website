<?php
/* GET请求地址：/api-internal/tradeview/price-history/suiusd/ */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $queryString = $_SERVER['QUERY_STRING'];
    $queryString = preg_replace('/\d{13}/i', '', $queryString);
    $md5Value = md5($queryString);
    header('md5: ' . $md5Value);
    header('Content-Type: application/json');
    $dataFileName = $_SERVER['DOCUMENT_ROOT'] . '/http/data/api-internal_tradeview_price-history_suiusd';
    $file_path = $dataFileName . '.' . $md5Value . '.dat';
    
    if (!file_exists($file_path)) { $file_path = $_SERVER['DOCUMENT_ROOT'] . '/http/data/api-internal_tradeview_price-history_suiusd.c8c919ddfe100a68665f84612dd5b6db.dat'; }
    ob_end_clean();
    echo file_get_contents($file_path);
}
?>