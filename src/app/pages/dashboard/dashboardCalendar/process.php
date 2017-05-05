<?php


$con = mysqli_connect('localhost','root','','calendar');

    $query = mysqli_query($con, "SELECT * FROM calendar");
    $events = array();
    while($fetch = mysqli_fetch_array($query))
    {;
    $e = array();
    $e['id'] = $fetch['id'];
    if($fetch['title'] == 'Memo')
    {
        $e['title'] = $fetch['memotitle']  .' - '. $fetch['title'] ;
    }
    else if($fetch['title'] == 'Project Appointment'){
        $e['title'] = $fetch['project_name']  .' - '. $fetch['title'].' to '. $fetch['product_spec'] ;
    }
    else if($fetch['title'] == 'Marketing Materials'){
        if($fetch['action'] == '1'){
                $action = 'Under Approval';
}
      else{
                $action = 'Approved';        
}
        $e['title'] = $fetch['project_name']  .' - '. $fetch['material'].' - '. $action ;
    }
    else if($fetch['allDay'] == 'true'){
        $e['title'] = '(TNTV )' .$fetch['project_name']  .' - '. $fetch['title'] ;
    }
    else {
        $e['title'] = $fetch['project_name']  .' - '. $fetch['title'] ;
    }   
    $e['start'] = $fetch['startdate'];
    $e['end'] = $fetch['enddate'];
    $e['color'] = $fetch['color'];


    if($fetch['extend'] == 'on'){
         $e['end'] = $fetch['ex_date'];
         $e['title'] = '(EXTND)' .$fetch['project_name']  .' - '. $fetch['title'] ;
}
    array_push($events, $e);
    }
    echo json_encode($events);

?>