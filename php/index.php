<?php
require_once './controller/datecalc.php';
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
    <link rel="stylesheet" type="text/css" media="screen" href="./css/header.css" />
</head>
<body>
    <div class="container" id="wrapper">
        <header id="myHeader"></header>
        <div class="card-container" id="card-container">
            <div class="card-front">
                <span>The next draw is: </span>
                <h2>
                    <?php echo $nextDraw->dayWeek.' '.$nextDraw->dayNumber.' '.$nextDraw->month.', '.$nextDraw->year.' at '.$nextDraw->hour; ?>
                </h2>
                
                <form action="<?php echo($_SERVER['PHP_SELF']) ?>" method="post">
                    <p>
                        <label for=""><span>Choose your date:</span><input type="datetime-local" class="datetime" name="datetime" id="datetime" value="<?php if($formDate) echo $formDate; ?>"></label>
                        <button type="submit" name="button" id="button" value="Submit">go</button>
                    </p>
                    
                    <span>The next draw for data choosed: </span>
                    <?php if(isset($resultDate->givenDate)): ?><h2><?php echo $resultDate->givenDate->dayWeek.' '.$resultDate->givenDate->dayNumber.' '.$resultDate->givenDate->month.', '.$resultDate->givenDate->year.' at '.$resultDate->givenDate->hour; ?></h2><?php endif; ?>
                    
                </form>
            </div>
        </div>
    </div>
    <script src="./js/header.js"></script>
</body>
</html>