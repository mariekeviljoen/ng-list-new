<?php
	$rows = file('data.csv');
	$last_row = array_pop($rows);
	$rec = str_getcsv($last_row);
?>

<!doctype html>
<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">   
  <link rel="stylesheet" href="../css/style.css">   
    
</head>
<body>
    <div class="container thanks">
    
        <h3>Thank you for your information!</h3>
        <p>We will contact you as soon as possible</p>
        
        <br><br>
        <article class="post">
      <p>This is your information we have captured</p>

      <table width="400" border="0" cellspacing="0" cellpadding="0" id="csvdata">
        <tr>
          <td width="34%" class="formLabel">Name:</td>
          <td width="66%"><?php echo $rec[0] ?></td>
        </tr>
        <tr>
          <td class="formLabel">Email:</td>
          <td><?php echo $rec[1] ?></td>
        </tr>
        <tr>
          <td class="formLabel">Cell:</td>
          <td><?php echo $rec[2] ?></td>
        </tr>
        <tr>
          <td class="formLabel">Date of birth:</td>
          <td><?php echo $rec[3] ?></td>
        </tr>
        <tr>
          <td class="formLabel">Years of art study:</td>
          <td><?php echo $rec[4] ?></td>
        </tr>
      </table>
      <p>&nbsp;</p>
    </article>

    <br><br>
    <a href="../index.html">&laquo; Back to the home page</a>

    </div> 
    
</body>

</html>


