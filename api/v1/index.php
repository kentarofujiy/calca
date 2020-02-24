<?php
require '.././libs/Slim/Slim.php';
require_once 'dbHelper.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app = \Slim\Slim::getInstance();
$db = new dbHelper();

/**
 * Database Helper Function templates
 */
/*
select(table name, where clause as associative array)
insert(table name, data as associative array, mandatory column names as array)
update(table name, column names as associative array, where clause as associative array, required columns as array)
delete(table name, where clause as array)
*/


// Products
$app->get('/products', function() { 
    global $db;
    $rows = $db->select("products","id,sku,name,description,price,mrp,stock,image,packing,status,manufactorer",array());
    echoResponse(200, $rows);
});

$app->post('/products', function() use ($app) { 
    $data = json_decode($app->request->getBody());
    $mandatory = array('name');
    global $db;
    $rows = $db->insert("products", $data, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Product added successfully.";
    echoResponse(200, $rows);
});

$app->put('/products/:id', function($id) use ($app) { 
    $data = json_decode($app->request->getBody());
    $condition = array('id'=>$id);
    $mandatory = array();
    global $db;
    $rows = $db->update("products", $data, $condition, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Product information updated successfully.";
    echoResponse(200, $rows);
});

$app->delete('/products/:id', function($id) { 
    global $db;
    $rows = $db->delete("products", array('id'=>$id));
    if($rows["status"]=="success")
        $rows["message"] = "Product removed successfully.";
    echoResponse(200, $rows);
});


// Tarifas
$app->get('/tarifas', function() { 
    global $db;
    $rows = $db->select("tarifas","subgrupo,modalidade,classe,id,iddistribuidora,posto,tusd,dtusd,dte,te",array());
    echoResponse(200, $rows);
});

$app->post('/tarifas', function() use ($app) { 
    $data = json_decode($app->request->getBody());
    $mandatory = array('name');
    global $db;
    $rows = $db->insert("tarifas", $data, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Tarifa added successfully.";
    echoResponse(200, $rows);
});

$app->put('/tarifas/:id', function($id) use ($app) { 
    $data = json_decode($app->request->getBody());
    $condition = array('id'=>$id);
    $mandatory = array();
    global $db;
    $rows = $db->update("tarifas", $data, $condition, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Tarifa information updated successfully.";
    echoResponse(200, $rows);
});

$app->delete('/tarifas/:id', function($id) { 
    global $db;
    $rows = $db->delete("tarifas", array('id'=>$id));
    if($rows["status"]=="success")
        $rows["message"] = "Tarifa removed successfully.";
    echoResponse(200, $rows);
});



// Clientes
$app->get('/clientes', function() { 
    global $db;
    $rows = $db->select("clientes","id,razao,cnpj,cidade,estado,grupo,classe,modalidade,potencia,horasprodutivasduteis,horasprodutivassabados,horasprodutivasdomingos,posto,subgrupo",array());
    echoResponse(200, $rows);
});

$app->post('/clientes', function() use ($app) { 
    $data = json_decode($app->request->getBody());
    $mandatory = array('name');
    global $db;
    $rows = $db->insert("clientes", $data, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Tarifa added successfully.";
    echoResponse(200, $rows);
});

$app->put('/clientes/:id', function($id) use ($app) { 
    $data = json_decode($app->request->getBody());
    $condition = array('id'=>$id);
    $mandatory = array();
    global $db;
    $rows = $db->update("clientes", $data, $condition, $mandatory);
    if($rows["status"]=="success")
        $rows["message"] = "Tarifa information updated successfully.";
    echoResponse(200, $rows);
});

$app->delete('/clientes/:id', function($id) { 
    global $db;
    $rows = $db->delete("clientes", array('id'=>$id));
    if($rows["status"]=="success")
        $rows["message"] = "Tarifa removed successfully.";
    echoResponse(200, $rows);
});

function echoResponse($status_code, $response) {
    global $app;
    $app->status($status_code);
    $app->contentType('application/json');
    echo json_encode($response,JSON_NUMERIC_CHECK);
}

$app->run();
?>