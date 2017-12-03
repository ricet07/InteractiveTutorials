using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace InteractiveLearning.Models
{
    public class TutorialsModels
    {
        public int TutorialID { get; set; }

        public string TutorialTitle { get; set; }
    }

}