<?php
$url=$_GET['urlString'];
$res = file_get_contents($url);
echo $res;
?>