<?php
if ($_GET['off'] != "true") {
    // remove all session variables
    session_unset();

    // destroy the session
    session_destroy();
}
include("seguranca.php"); // Inclui o arquivo com o sistema de segurança
protegePagina(); // Chama a função que protege a página
?>
<?php
$nome = $usuario = $senha = $status = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = test_input($_POST["nome"]);
    $usuario = test_input($_POST["usuario"]);
    $senha = test_input($_POST["senha"]);

    if (($nome == "") or ($usuario == "") or ($senha == "")) {
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

        $sql = "UPDATE usuarios SET nome = '" . $nome . "', usuario = '" . $usuario . "', senha = '" . $senha . "' WHERE id = " . $_SESSION['usuarioID'];

        if (mysqli_query($conn, $sql)) {
            $status = "1";
            $_SESSION['usuarioNome'] = $nome;
            $_SESSION['usuarioLogin'] = $usuario;
            $_SESSION['usuarioSenha'] = $senha;
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
$pagina_atual_menu = "user";
include("menu.php");
?>
<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:300px;margin-top:43px;">
    <?php
    if ($status == "1") {
        echo '<div class="w3-panel w3-green">';
        echo '<p>Usuário atualizado com sucesso.</p>';
        echo '</div>';
    }
    if ($status == "0") {
        echo '<div class="w3-panel w3-red">';
        echo '<p>Preencha todos os campos.</p>';
        echo '</div>';
    }
    ?>
    <!-- Header -->
    <header class="w3-container" style="padding-top:22px">
        <h5><b><i class="fa fa-dashboard"></i> Meu Usuário</b></h5>
    </header>

    <div class="w3-row-padding w3-margin-bottom">
        <div class="w3-quarter">
            <form class="w3-container" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                <p>Nome: </p><input type="text" value="<?php echo $_SESSION['usuarioNome']; ?>" name="nome">
                <p>Login: </p><input type="text" value="<?php echo $_SESSION['usuarioLogin']; ?>" name="usuario">
                <p>Senha: </p><input type="password" value="<?php echo $_SESSION['usuarioSenha']; ?>" name="senha">
                <p><input type="submit" value="Salvar"></p>
            </form>
        </div>
    </div>
</div>
<?php
include("rodape.php");
?>