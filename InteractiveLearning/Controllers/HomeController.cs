using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace InteractiveLearning.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "CC & Co.";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Chris Campbell";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Feel free to contact us at any time.";

            return View();
        }

        public ActionResult Tutorials()
        {
            ViewBag.Message = "Your list of Tutorials.";

            return View();
        }

        public ActionResult AddingContent()
        {
            ViewBag.Message = "Coming soon!";

            return View();
        }

        public ActionResult Maintenance()
        {
            ViewBag.Message = "This page is currently undergoing maintenance!";

            return View();
        }
    }
}