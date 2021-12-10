using Grpc;
using Grpc.Core;

namespace Grpc.Services
{
    public class TemperService : Temper.TemperBase
    {
        private readonly ILogger<TemperService> _logger;
        public TemperService(ILogger<TemperService> logger)
        {
            _logger = logger;
        }

        public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
        {
            return Task.FromResult(new HelloReply
            {
                Message = "Hello " + request.Name
            });
        }
        public override Task<HelloReply> SayHello2(HelloRequest request, ServerCallContext context)
        {
            return Task.FromResult(new HelloReply
            {
                Message = "Hello2 " + request.Name
            });
        }
    }
}