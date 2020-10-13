using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main()
        {
            Console.WriteLine("digite seu nome:");
            double var1 = 5.73;
            int var = (int)var1; // conversao manual de uma variavel maior para menor
            Console.WriteLine(var);
            string user = Console.ReadLine();
            Console.WriteLine("seu nome é"+ user);

        }
    }
}
