﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MVC2.Controllers
{
    public class FaqController : Controller
    {
        [Route("Perguntas-Frequentes")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
