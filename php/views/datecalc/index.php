<?php 
    if(isset($this->dateGiven)){
        $formDate = $this->dateGiven;
    }
    
?>
<DOCTYPE html>
<html>
  <head>
  </head>
  <body>
      <div class="container" id="main-container">
        <div class="card-container" id="card-container">
            <div class="card-front">
                <span>The next draw is: </span>
                <h2>
                    <?php echo $this->nextDraw->dayWeek.' '.$this->nextDraw->dayNumber.' '.$this->nextDraw->month.', '.$this->nextDraw->year.' at '.$this->nextDraw->hour; ?>
                </h2>
                
                <form action="<?php echo($_SERVER['PHP_SELF']).'?action=index'; ?>" method="post">
                    <p>
                        <label for=""><span>Choose your date:</span><input type="datetime-local" class="datetime" name="datetime" id="datetime" value="<?php if($formDate) echo $formDate; ?>"></label>
                        <button type="submit" name="button" id="button" value="Submit">go</button>
                    </p>
                    
                    
                    <?php if(isset($this->resultDate->givenDate)): ?><span>The next draw for data choosed: </span><h2><?php echo $this->resultDate->givenDate->dayWeek.' '.$this->resultDate->givenDate->dayNumber.' '.$this->resultDate->givenDate->month.', '.$this->resultDate->givenDate->year.' at '.$this->resultDate->givenDate->hour; ?></h2><?php endif; ?>
                    
                </form>
            </div>
        </div>
    </div>
  <body>
<html>
