using InteractiveLearning.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace InteractiveLearning.Controllers
{
    public class TutorialsController : Controller
    {
        // GET: Tutorials
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult  MicrosoftExcel()
        {
            TutorialsModels model = new TutorialsModels();
            model.TutorialTitle = "Choose which Microsoft Excel tutorial works for you:";
            return View(model);
        }

        [HttpPost]
        public ActionResult MicrosoftExcel(TutorialsModels model)
        {
            switch(model.TutorialID)
            {
                case 0:
                    return IntroToExcel(model);
                default:
                    return Index();                
            }
        }

        public ActionResult IntroToExcel(TutorialsModels model)
        {
            model.TutorialTitle = "Introduction to Microsoft Excel";
            return View("MicrosoftExcel/IntroToExcel", model);
        }

        public ActionResult CellBasics(TutorialsModels model)
        {
            model.TutorialTitle = "Microsoft Excel: Learning Cell Basics";
            return View("MicrosoftExcel/CellBasics", model);
        }


    }
}