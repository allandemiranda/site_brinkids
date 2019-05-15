<?php
include("seguranca.php"); // Inclui o arquivo com o sistema de segurança
if ($_GET['off'] == "true") {
    expulsaVisitante();
}
protegePagina(); // Chama a função que protege a página
?>
<?php
$link = $status = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $link = test_input($_POST["link"]);

    $file_headers = get_headers($link);
    if (($link == "") or ($file_headers[0] == 'HTTP/1.1 404 Not Found')) {
        $status = "0";
    } else {
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

        $sql = "INSERT INTO fotos (image) VALUES ('" . $link . "')";

        if (mysqli_query($conn, $sql)) {
            $status = "1";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }

        mysqli_close($conn);
    }
}

function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
<?php
if ($_GET['id_link'] != "") {
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

    $sql = "DELETE FROM fotos WHERE id=" . $_GET['id_link'] . "";

    if (mysqli_query($conn, $sql)) {
        $status = "2";
    } else {
        echo "Error deleting record: " . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>
<?php
$pagina_atual_menu = "fotos";
include("menu.php");
?>
<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:300px;margin-top:43px;">
    <?php
    if ($status == "1") {
        echo '<div class="w3-panel w3-green">';
        echo '<p>Foto adicionada com sucesso.</p>';
        echo '</div>';
    }
    if ($status == "0") {
        echo '<div class="w3-panel w3-red">';
        echo '<p>Digite um link válido.</p>';
        echo '</div>';
    }
    if ($status == "2") {
        echo '<div class="w3-panel w3-green">';
        echo '<p>Foto deletada com sucesso.</p>';
        echo '</div>';
    }
    ?>
    <!-- Header -->
    <header class="w3-container" style="padding-top:22px">
        <h5><b><i class="fa fa-dashboard"></i> Fotos</b></h5>
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

                    $sql = "SELECT id, image FROM fotos";
                    $result = mysqli_query($conn, $sql);

                    if (mysqli_num_rows($result) > 0) {
                        // output data of each row
                        while ($row = mysqli_fetch_assoc($result)) {
                            echo "<tr>";
                            echo "<td>" . $row["image"] . "</td>";
                            echo '<td><a href="' . $_SERVER['SCRIPT_URI'] . '?id_link=' . $row["id"] . '"><i class="far fa-trash-alt w3-text-red w3-large"></i></a></td>';
                            echo "</tr>";
                        }
                    }

                    mysqli_close($conn);
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
                    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                        <p>Link: </p><input type="text" style="width: 100%;" name="link">
                        <p><input type="submit" value="Adicionar"></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
include("rodape.php");
?>