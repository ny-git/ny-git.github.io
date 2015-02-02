<html>
<head>
<title>formデータ出力</title>
</head>
<body>

<?php phpinfo(); ?>

<?php
$name = $_GET['name'];
 
echo '入力されたお名前は『'.$name.'』です。';
?>
</body></html>