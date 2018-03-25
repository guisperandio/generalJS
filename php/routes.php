<?php
  function call($controller, $action) {
    require_once('controllers/' . $controller . '_controller.php');

    switch($controller) {
      case 'datecalc':
        require_once('models/datecalc.php');
        $controller = new DateCalcController();
      break;
    }
    
    $controller->{ $action }();
  }

  // we're adding an entry for the new controller and its actions
  $controllers = array('datecalc' => ['index', 'getData', 'error']);

  if (array_key_exists($controller, $controllers)) {
    if (in_array($action, $controllers[$controller])) {
      call($controller, $action);
    } else {
      call('datecalc', 'error');
    }
  } else {
    call('datecalc', 'error');
  }
?>