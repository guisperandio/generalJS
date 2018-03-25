<?php
require_once './controllers/datecalc_controller.php';

if (isset($_GET['controller']) && isset($_GET['action'])) {
    $controller = $_GET['controller'];
    $action     = $_GET['action'];
  } else {
    $controller = 'datecalc';
    $action     = 'index';
  }

  require_once('views/layout.php');
  
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>PHP - Betbright</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="./css/reset.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="./css/main.css" />
</head>
<body>
    
</body>
</html>