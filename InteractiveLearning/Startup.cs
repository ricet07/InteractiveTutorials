using Microsoft.Owin;
using Owin;

//[assembly: OwinStartupAttribute(typeof(InteractiveLearning.Startup))]
namespace InteractiveLearning
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
