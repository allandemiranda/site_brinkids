<?php
include("seguranca.php"); // Inclui o arquivo com o sistema de segurança
if ($_GET['off'] == "true") {
    expulsaVisitante();
}
protegePagina(); // Chama a função que protege a página
?>
<?php
$pagina_atual_menu = "index";
include("menu.php");
?>
<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:300px;margin-top:43px;">

    <!-- Header -->
    <header class="w3-container" style="padding-top:22px">
        <h5><b><i class="fa fa-dashboard"></i> Meu Dashboard</b></h5>
    </header>

    <div class="w3-row-padding w3-margin-bottom">
        <div class="w3-quarter">
            <div class="w3-container w3-orange w3-text-white w3-padding-16">
                <div class="w3-left"><i class="fa fa-users w3-xxxlarge"></i></div>
                <div class="w3-right">
                    <?php
                    $servername = "localhost";
                    $username = "allan";
                    $password = "sistemaufrn";
                    $dbname = "web_imd";

                    // Create connection
                    $conn = mysqli_connect($servername, $username, $password, $dbname);
                    // Check connection
                    if (!$conn) {
                        die("Connection failed: " . mysqli_connect_error());
                    }
                    $sql = "SELECT id FROM usuarios";
                    $result = mysqli_query($conn, $sql);
                    $contador = 0;
                    if (mysqli_num_rows($result) > 0) {
                        // output data of each row
                        while ($row = mysqli_fetch_assoc($result)) {
                            $contador++;
                        }
                    }

                    mysqli_close($conn);
                    ?>
                    <h3><?php echo $contador; ?></h3>
                </div>
                <div class="w3-clear"></div>
                <h4>Usuários</h4>
            </div>
        </div>
        <div class="w3-quarter">
            <div class="w3-container w3-green w3-text-white w3-padding-16">
                <div class="w3-left"><i class="fab fa-slideshare w3-xxxlarge"></i></div>
                <div class="w3-right">
                    <?php
                    $servername = "localhost";
                    $username = "allan";
                    $password = "sistemaufrn";
                    $dbname = "web_imd";

                    // Create connection
                    $conn = mysqli_connect($servername, $username, $password, $dbname);
                    // Check connection
                    if (!$conn) {
                        die("Connection failed: " . mysqli_connect_error());
                    }
                    $sql = "SELECT id FROM slideshow";
                    $result = mysqli_query($conn, $sql);
                    $contador = 0;
                    if (mysqli_num_rows($result) > 0) {
                        // output data of each row
                        while ($row = mysqli_fetch_assoc($result)) {
                            $contador++;
                        }
                    }

                    mysqli_close($conn);
                    ?>
                    <h3><?php echo $contador; ?></h3>
                </div>
                <div class="w3-clear"></div>
                <h4>SlideShow</h4>
            </div>
        </div>
    </div>
    <!-- End page content -->
</div>

<?php
include("rodape.php");
?>