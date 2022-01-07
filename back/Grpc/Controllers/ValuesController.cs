using Grpc.Models;
using Microsoft.AspNetCore.Mvc;

namespace Grpc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpPost]
        public RestAnswer Get([FromBody] RestAnswer model)
        {
            return new RestAnswer
            {
                Name = $"Hello rest {model.Name}"
            };
        }
    }
}
