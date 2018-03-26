<?php 
    $formDate = new stdClass();
    if(isset($this->dateGiven)){
        $formDate->date = $this->dateGiven->date;
        $formDate->hour = $this->dateGiven->hour;
    } else{
        $formDate->date = $this->_model->dateToday->format('Y-m-d');
        $formDate->hour = $this->_model->dateToday->format('H:i');
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
                        <label for="" class="date"><span>Choose date:</span><input type="date" class="datetime" name="datetime" id="datetime" value="<?php echo $formDate->date; ?>"></label>
                        <label for="" class="hour"><span>Choose Time:</span><input type="time" class="datetime" name="hour" value="<?php echo $formDate->hour; ?>"></label>
                        <button type="submit" name="button" id="button" value="Submit">go</button>
                    </p>
                    
                    
                    <?php if(isset($this->resultDate->givenDate)): ?>
                        <span>
                            <?php echo $this->resultDate->givenDate->time; ?>    
                        </span>
                        <h2>
                            <?php echo $this->resultDate->givenDate->dayWeek.' '.$this->resultDate->givenDate->dayNumber.' '.$this->resultDate->givenDate->month.', '.$this->resultDate->givenDate->year.' at '.$this->resultDate->givenDate->hour; ?>
                        </h2>
                    <?php endif; ?>
                    
                </form>
            </div>
        </div>
    </div>
  <body>
<html>
