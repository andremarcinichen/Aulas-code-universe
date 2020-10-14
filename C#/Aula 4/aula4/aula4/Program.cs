using System;
using System.IO;  // inclui o System.IO namespace

namespace MyApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            string writeText = "nome + sexo + idade+ endereço + cep";  // Cria a string de texto
            File.WriteAllText("filename.pdf", writeText);  //Crie um arquivo e escreva o conteúdo do writeText nele

            string readText = File.ReadAllText("filename.pdf"); // Lê o conteúdo do arquivo
            Console.WriteLine(readText); // Saída do conteúdo
        }
    }
}