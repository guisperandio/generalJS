<?php 
    class DateCalc{

        public $dateToday;

        public function __construct($dateToday){
            $this->dateToday = $dateToday;
        }

        public static function checkDate($data, $dateToday){

            $data = new Datetime(date('Y-m-d H:i', strtotime($data->date.' '.$data->hour)));
            
            $dateToday = new Datetime(date('Y-m-d H:i', strtotime($dateToday)));

            if($data < $dateToday){
                return 'The closest draw to the reported date was:';
            } else{
                return 'The closest draw to the reported date is:';
            }
        }

        public static function getNextDraw(){

            $nextWed = new Datetime(date('d-m-Y H:i', strtotime('next wednesday 8pm')));
            $nextSat = new Datetime(date('d-m-Y H:i', strtotime('next saturday 8pm')));
            
            $dateToday = new Datetime(date('d-m-Y H:i'));

            $result = new stdClass();
            if($dateToday < $nextWed && $nextWed < $nextSat){
                $day = strtotime('next wednesday 8pm');
                $result->dayWeek = date('l', $day);
                $result->dayNumber = date('j', $day).date('S', $day);
                $result->month = date('F', $day);
                $result->year = date('Y', $day);
                $result->hour = date('H:i', $day);
                return $result;
            } else {
                $day = strtotime('next saturday 8pm');
                $result->dayWeek = date('l', $day);
                $result->dayNumber = date('j', $day).date('S', $day);
                $result->month = date('F', $day);
                $result->year = date('Y', $day);
                $result->hour = date('H:i', $day);
                return $result;
            }
        }

        public static function getGivenDate($givenDate, $time){

            $givenDate = $givenDate->date.' '.$givenDate->hour;

            $dayWeek = date('D', strtotime($givenDate));
            
            $nextWed = ($dayWeek == 'Wed') ? new Datetime(date('Y-m-d H:i', strtotime('today 8pm', strtotime($givenDate)))) :
                $nextWed = new Datetime(date('Y-m-d H:i', strtotime('next wednesday 8pm', strtotime($givenDate))));
        
            $nextSat = ($dayWeek == 'Sat') ? new Datetime(date('Y-m-d H:i', strtotime('today 8pm', strtotime($givenDate)))) :
                $nextSat = new Datetime(date('Y-m-d H:i', strtotime('next saturday 8pm', strtotime($givenDate))));
        
            $date = new Datetime(date('Y-m-d H:i', strtotime($givenDate)));        


            $result = new stdClass();
            $result->givenDate = new stdClass();

            $result->dataDraw = ($date < $nextWed && $nextWed < $nextSat) ? date('Y-m-d H:i', strtotime($nextWed->format('Y-m-d H:i:s'))) : date('Y-m-d H:i', strtotime($nextSat->format('Y-m-d H:i:s')));
            
            $day = strtotime($result->dataDraw);

            $result->givenDate->dayWeek = date('l', $day);
            $result->givenDate->dayNumber = date('j', $day).date('S', $day);
            $result->givenDate->month = date('F', $day);
            $result->givenDate->year = date('Y', $day);
            $result->givenDate->hour = date('H:i', $day);
            $result->givenDate->time = $time;

            return $result;
        }
    }
?>