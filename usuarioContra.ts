
class Program {
    static void Main(string[] args) {
        string username, password;
        Console.Write("Ingrese su nombre de usuario: ");
        username = Console.ReadLine();
        Console.Write("Ingrese su contraseña: ");
        password = Console.ReadLine();

        // Validar el usuario y la contraseña
        if (username == "mi_usuario" && password == "mi_contraseña") {
            Console.WriteLine("Inicio de sesión exitoso.");
        } else {
            Console.WriteLine("Usuario o contraseña incorrectos.");
        }
        Console.ReadKey();
    }
}
