using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10_Young.Data;

namespace Mission10_Young.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private BowlingLeagueContext _bowlingContext;

        public BowlerController(BowlingLeagueContext temp)
        {
            _bowlingContext = temp;

        }

        [HttpGet(Name = "GetBowlers")]
        public IEnumerable<Bowler> Get()
        {
            var bowlersList = _bowlingContext.Bowlers.ToList();

            return (bowlersList);
        }
    }
}