<?php
   header("Content-type:application/json; charset=utf-8");

   require_once('db.php');

   if($link){
    //    $id = $_GET['id'];
       $sql = " select count from praise_count where id=1 ";
       mysqli_query($link,'SET NAMES utf8'); //防止乱码
       $result =mysqli_query($link,$sql);
       $sendData =array();
       $row =mysqli_fetch_assoc($result);
       echo json_encode(array('success' => true, 'count' => $row['count'], 'msg' => 'ok'));
   }else{
       echo json_encode(array('success' => false, 'msg'=> 'no'));
   }
   mysqli_close($link);
?>