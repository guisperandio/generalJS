<?php
    class DateCalcController{

        function __construct($date){
            $this->_model = new DateCalc($date);
        }

        public function index() {
            $this->nextDraw = $this->_model::getNextDraw();
            
            if(isset($_POST['datetime']) && isset($_POST['hour'])){
                
                $this->dateGiven = new stdClass();
                $this->dateGiven->date = $_POST['datetime'];
                $this->dateGiven->hour = $_POST['hour'];

                $this->checkDate = $this->_model::checkDate($this->dateGiven, $this->_model->dateToday->format('Y-m-d H:i'));
                $this->resultDate = $this->_model::getGivenDate($this->dateGiven, $this->checkDate);
            }
            
            require_once('views/datecalc/index.php');
        }

        public function error(){
            require_once('views/error.php');
        }

    }
?>