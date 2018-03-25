<?php
    class DateCalcController{
        public function index() {
            $this->nextDraw = DateCalc::getNextDraw();
            
            if(isset($_POST['datetime'])){
                $this->dateGiven = $_POST['datetime'];
                $this->resultDate = DateCalc::getGivenDate($this->dateGiven);
            }
            
            require_once('views/datecalc/index.php');
        }

        public function error(){
            require_once('views/error.php');
        }

    }
?>