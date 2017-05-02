<?php
if(isset($_POST['submit'])) {
	$post = $_POST;
	unset($post['submit']);
    $data = array_values($post);
    $headers = array_keys($post);
	if( $fp = fopen('data.csv','a+')) {
		$line = fgets($fp);
		if(!$line == $headers) {
				
				fputcsv($fp, $headers);
				fputcsv($fp, $data);
		}
		else
		{
			fputcsv($fp, $data);
		}
		fclose($fp);
		header('Location: thanks.php');
	}
}
?>