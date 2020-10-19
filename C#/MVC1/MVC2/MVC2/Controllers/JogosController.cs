using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MVC2.Controllers
{
    public class JogosController : Controller
    {
        [Route("Jogos-de-Tabuleiro")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
