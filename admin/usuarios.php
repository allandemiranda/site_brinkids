<?php
include("seguranca.php"); // Inclui o arquivo com o sistema de segurança
if ($_GET['off'] == "true") {
    expulsaVisitante();
}
protegePagina(); // Chama a função que protege a página
?>
<?php
$nome = $usuario = $senha = $senhaDois = $status = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = test_input($_POST["nome"]);
    $usuario = test_input($_POST["usuario"]);
    $senha = test_input($_POST["senha"]);
    $senhaDois = test_input($_POST["senhaDois"]);

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

    if (($nome == "") or ($usuario == "") or ($senha == "")) {
        $status = "0";
    } else {
        if ($senha != $senhaDois) {
            $status = "1";
        } else {
            $sql = "INSERT INTO usuarios (nome, usuario, senha) VALUES ('" . $nome . "', '" . $usuario . "', '" . $senha . "')";

            if (mysqli_query($conn, $sql)) {
                $status = "2";
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
        }
    }

    mysqli_close($conn);
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
if ($_GET['id_user'] != "") {
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

    $sql = "DELETE FROM usuarios WHERE id=" . $_GET['id_user'] . "";

    if (mysqli_query($conn, $sql)) {
        $status = "3";
    } else {
        echo "Error deleting record: " . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>
<?php
$pagina_atual_menu = "usuarios";
include("menu.php");
?>
<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:300px;margin-top:43px;">
    <?php
    if ($status == "2") {
        echo '<div class="w3-panel w3-green">';
        echo '<p>Usuário adicionado com sucesso.</p>';
        echo '</div>';
    }
    if ($status == "1") {
        echo '<div class="w3-panel w3-red">';
        echo '<p>As senhas digitadas são diferentes.</p>';
        echo '</div>';
    }
    if ($status == "0") {
        echo '<div class="w3-panel w3-red">';
        echo '<p>Preencha todos os campos.</p>';
        echo '</div>';
    }
    if ($status == "3") {
        echo '<div class="w3-panel w3-green">';
        echo '<p>Usuário deletado com sucesso.</p>';
        echo '</div>';
    }
    ?>
    <!-- Header -->
    <header class="w3-container" style="padding-top:22px">
        <h5><b><i class="fa fa-dashboard"></i> Usuários</b></h5>
    </header>

    <div class="w3-panel">
        <div class="w3-row-padding">
            <div>
                <h5>Lista</h5>
                <table class="w3-table w3-striped w3-white">
                    <tr>
                        <th>Nome</th>
                        <th>Usuário</th>
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

                    $sql = "SELECT id, nome, usuario FROM usuarios";
                    $result = mysqli_query($conn, $sql);

                    if (mysqli_num_rows($result) > 0) {
                        // output data of each row
                        while ($row = mysqli_fetch_assoc($result)) {
                            echo "<tr>";
                            echo "<td>" . $row["nome"] . "</td>";
                            echo "<td>" . $row["usuario"] . "</td>";
                            if ($row["nome"] != $_SESSION['usuarioNome']) {
                                echo '<td><a href="' . $_SERVER['SCRIPT_URI'] . '?id_user=' . $row["id"] . '"><i class="far fa-trash-alt w3-text-red w3-large"></i></a></td>';
                            } else {
                                echo '<td><i class="fas fa-ban"></i></td>';
                            }
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
        <div class="w3-row-padding w3-margin-bottom">
            <div class="w3-third">
                <h5>Adicionar Imagem</h5>
                <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                    <p>Nome: <input type="text" style="width: 100%;" name="nome"></p>
                    <p>Usuário: <input type="text" style="width: 100%;" name="usuario"></p>
                    <p>Senha: <input type="password" style="width: 100%;" name="senha"></p>
                    <p>Confirme a Senha: <input type="password" style="width: 100%;" name="senhaDois"></p>
                    <p><input type="submit" value="Adicionar"></p>
                </form>
            </div>
        </div>
    </div>
</div>
<?php
include("rodape.php");
?>