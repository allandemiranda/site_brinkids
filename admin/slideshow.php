<?php
include("seguranca.php"); // Inclui o arquivo com o sistema de segurança
protegePagina(); // Chama a função que protege a página
?>
<?php
    $link = $status = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $link = test_input($_POST["link"]);
    }
    
    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
    
    if(($link == "") or ($link == "404")) {
        $status = "0";
    } else {   
        $sql = "INSERT INTO slideshow (link) VALUES ('". $link ."')";

        if (mysqli_query($_SG['link'], $sql)) {
            $status = "1";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($_SG['link']);
        }
    }  

?>
<?php
    if($_GET['id_link'] != ""){
        $sql = "DELETE FROM slideshow WHERE id=".$_GET['id_link']."";

        if (mysqli_query($_SG['link'], $sql)) {
            $status = "2";
        } else {
            echo "Error deleting record: " . mysqli_error($_SG['link']);
        }
    }    
?>
<!DOCTYPE html>
<html>
    <title>ADMIN BRINKIDS</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <style>
    html,body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}
    </style>
    <body class="w3-light-grey">

        <!-- Top container -->
        <div class="w3-bar w3-top w3-black w3-large" style="z-index:4">
            <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="w3_open();"><i class="fa fa-bars"></i>  Menu</button>
            <span class="w3-bar-item w3-right">BRINKIDS</span>
        </div>

        <!-- Sidebar/menu -->
        <nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>
        <div class="w3-container w3-row">            
            <div class="w3-col s8 w3-bar">
                <span>Bem Vindo, <strong><?php echo $_SESSION['usuarioNome']; ?></strong></span><br>
                <a href="#" class="w3-bar-item w3-button"><i class="fa fa-user"></i></a>
                <a href="#" class="w3-bar-item w3-button"><i class="fas fa-power-off"></i></a>
            </div>
        </div>
        <hr>
        <div class="w3-container">
            <h5>Menu</h5>
        </div>
        <div class="w3-bar-block">
            <a href="#" class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onclick="w3_close()" title="close menu"><i class="fa fa-remove fa-fw"></i>  Close Menu</a>
            <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fas fa-tachometer-alt"></i>  Meu Dashboard</a>
            <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-users fa-fw"></i>  Usuários</a>
            <a href="#" class="w3-bar-item w3-button w3-padding w3-blue"><i class="fab fa-slideshare"></i>  SlideShow</a>            
        </div>
        </nav>


        <!-- Overlay effect when opening sidebar on small screens -->
        <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

        <!-- !PAGE CONTENT! -->
        <div class="w3-main" style="margin-left:300px;margin-top:43px;">
        <?php
            if($status = "1"){
                echo '<div class="w3-panel w3-green">';
                    echo '<p>Foto adicionada com sucesso.</p>';
                echo '</div>';
            }
            if($status = "0"){
                echo '<div class="w3-panel w3-red">';
                    echo '<p>Digite um link válido.</p>';
                echo '</div>';
            }
            if($status = "2"){
                echo '<div class="w3-panel w3-green">';
                    echo '<p>Foto deletada com sucesso.</p>';
                echo '</div>';
            }
        ?>
            <!-- Header -->
            <header class="w3-container" style="padding-top:22px">
                <h5><b><i class="fa fa-dashboard"></i> SlideShow</b></h5>
            </header>          

            <div class="w3-panel">
                <div class="w3-row-padding">                
                    <div>
                        <h5>Lista</h5>
                        <table class="w3-table w3-striped w3-white">
                            <tr>
                                <th>Link</th>
                                <th></th>
                            </tr>
                            <?php
                                $sql = "SELECT id, link FROM slideshow";
                                $result = mysqli_query($_SG['link'], $sql);
                                
                                if (mysqli_num_rows($result) > 0) {
                                    // output data of each row
                                    while($row = mysqli_fetch_assoc($result)) {
                                        echo "<tr>";
                                            echo "<td>". $row["link"] ."</td>"; 
                                            echo '<td><a href="'. $_SERVER['SCRIPT_URI'] .'?id_link='. $row["id"] .'"><i class="far fa-trash-alt w3-text-red w3-large"></i></a></td>'                                       
                                        echo "</tr>"; 
                                    }
                                }
                                
                                mysqli_close($_SG['link']);
                            ?> 
                        </table>
                    </div>
                </div>
            </div>
            <hr>
            <div class="w3-panel">
                <div class="w3-row-padding">                
                    <div>
                        <h5>Adicionar Imagem</h5>
                        <div>
                            <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                                <p>Link: </p><input type="text" style="width: 100%;">
                                <p><input type="button" value="Adicionar"></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script>
            // Get the Sidebar
            var mySidebar = document.getElementById("mySidebar");

            // Get the DIV with overlay effect
            var overlayBg = document.getElementById("myOverlay");

            // Toggle between showing and hiding the sidebar, and add overlay effect
            function w3_open() {
            if (mySidebar.style.display === 'block') {
                mySidebar.style.display = 'none';
                overlayBg.style.display = "none";
            } else {
                mySidebar.style.display = 'block';
                overlayBg.style.display = "block";
            }
            }

            // Close the sidebar with the close button
            function w3_close() {
            mySidebar.style.display = "none";
            overlayBg.style.display = "none";
            }
        </script>

    </body>
</html>
