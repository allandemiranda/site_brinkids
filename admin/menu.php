<!DOCTYPE html>
<html>
<title>ADMIN BRINKIDS</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
<style>
    html,
    body,
    h1,
    h2,
    h3,
    h4,
    h5 {
        font-family: "Raleway", sans-serif
    }
</style>

<body class="w3-light-grey">

    <!-- Top container -->
    <div class="w3-bar w3-top w3-black w3-large" style="z-index:4">
        <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="w3_open();"><i class="fa fa-bars"></i> Menu</button>
        <span class="w3-bar-item w3-right">BRINKIDS</span>
    </div>

    <!-- Sidebar/menu -->
    <nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>
        <div class="w3-container w3-row">
            <div class="w3-col s8 w3-bar">
                <span>Bem Vindo, <strong><?php echo $_SESSION['usuarioNome']; ?></strong></span><br>
                <a href="user.php" class="w3-bar-item w3-button <?php if ($pagina_atual_menu == "user") {
                                                                    echo "w3-blue";
                                                                } ?>"><i class="fa fa-user"></i></a>
                <a href="<?php echo $_SERVER['SCRIPT_URI'] . "?off=true"; ?>" class="w3-bar-item w3-button"><i class="fas fa-power-off"></i></a>
            </div>
        </div>
        <hr>
        <div class="w3-container">
            <h5>Menu</h5>
        </div>
        <div class="w3-bar-block">
            <a href="#" class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onclick="w3_close()" title="close menu"><i class="fa fa-remove fa-fw"></i> Close Menu</a>
            <a href="index.php" class="w3-bar-item w3-button w3-padding <?php if ($pagina_atual_menu == "index") {
                                                                            echo "w3-blue";
                                                                        } ?>"><i class="fas fa-tachometer-alt"></i> Meu Dashboard</a>
            <a href="usuarios.php" class="w3-bar-item w3-button w3-padding <?php if ($pagina_atual_menu == "usuarios") {
                                                                                echo "w3-blue";
                                                                            } ?>"><i class="fa fa-users fa-fw"></i> Usuários</a>
            <a href="slideshow.php" class="w3-bar-item w3-button w3-padding <?php if ($pagina_atual_menu == "slideshow") {
                                                                                echo "w3-blue";
                                                                            } ?>"><i class="fab fa-slideshare"></i> SlideShow</a>
        </div>
    </nav>


    <!-- Overlay effect when opening sidebar on small screens -->
    <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>