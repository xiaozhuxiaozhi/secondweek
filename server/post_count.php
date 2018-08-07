<?php
    header('Content-type:application/json;charset=utf-8');
    require_once('db.php');
    if($link){
        // $id =$_GET['id'];
        $sql ='update praise_count set count =count+1 where id=1';
        mysqli_query($link,'SET NAMES utf8');
        $result =mysqli_query($link,$sql);
        //发送数据给前端
        echo json_encode(array('success' => $result, 'msg' => 'ok'));
    }else{
        echo json_encode(array('success' => $result, 'msg' => 'no'));
    }
    mysqli_close($link);
?>