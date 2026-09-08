<?php
// Script de sauvegarde automatique de la base SQLite physique sur serveur web Intranet (PHP / Apache / Nginx)
header('Content-Type: application/json');
$data = file_get_contents('php://input');
if ($data && strlen($data) > 0) {
    file_put_contents('caf_auto.sqlite', $data);
    echo json_encode(['status' => 'success', 'bytes' => strlen($data)]);
} else {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Données vides']);
}
?>
