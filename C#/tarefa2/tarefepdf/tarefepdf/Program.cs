using System;

namespace tarefepdf
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("digite seu nome:");
            string nome = Console.ReadLine();
            Console.WriteLine("Digite o seu sexo");
            string sexo = Console.ReadLine();
            Console.WriteLine("Digite o seu endereço ");
            string endereco = Console.ReadLine();
            Console.WriteLine("Digite a sua idade");
            string idade = Console.ReadLine();
            Console.WriteLine("Digite a sua cep");
            string seucep = Console.ReadLine();
        Console.WriteLine("Seu nome é " + nome + " o seu sexo é: " + sexo + " o seu endereço é: " + endereco + " sua idade é: " + idade + " e seu cep é: " + seucep);
        
        }
    }
}
