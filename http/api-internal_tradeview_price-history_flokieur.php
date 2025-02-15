<?php
/* GET请求地址：/api-internal/tradeview/price-history/flokieur/ */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $queryString = $_SERVER['QUERY_STRING'];
    $queryString = preg_replace('/\d{13}/i', '', $queryString);
    $md5Value = md5($queryString);
    header('md5: ' . $md5Value);
    header('Content-Type: application/json');
    $dataFileName = $_SERVER['DOCUMENT_ROOT'] . '/http/data/api-internal_tradeview_price-history_flokieur';
    $file_path = $dataFileName . '.' . $md5Value . '.dat';
    
    if (!file_exists($file_path)) { $file_path = $_SERVER['DOCUMENT_ROOT'] . '/http/data/api-internal_tradeview_price-history_flokieur.404a3079ea18c6e193334ffa86166eaf.dat'; }
    ob_end_clean();
    echo file_get_contents($file_path);
}
?>