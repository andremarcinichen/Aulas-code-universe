using System;

namespace calculadora
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("digite seu nome:");
            string nome = Console.ReadLine();
            Console.WriteLine("Digite o calculo a ser realizado: soma,subtracao,multiplicacao ou divisao");
            string operacao = Console.ReadLine();
            Console.WriteLine("Digite o primeiro valor:");
            string stringvalor1 = Console.ReadLine();
            Console.WriteLine("Digite o segundo valor valor:");
            string stringvalor2 = Console.ReadLine();
            int valor1 = Int32.Parse(stringvalor1);
            int valor2 = Int32.Parse(stringvalor2);
            long resultado=0;
            switch (operacao)
            {
                case "soma":
                    resultado = valor1 + valor2;
                    break;
                case "subtracao":
                    resultado = valor1 - valor2;
                    break;
                case "multiplicacao":
                    resultado = valor1 * valor2;
                    break;
                case "divisao":
                    resultado = valor1 / valor2;
                    break;
            }
            Console.WriteLine("Seu nome é " + nome +" e a operacao escolhida foi: "+ operacao + " e o resultado foi: " + resultado);
        }
    }
    
}
