// Controller for the bowler API

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        // Here is the get request. It uses linq to query the database for only those with the team name of Marlins or Sharks
        [HttpGet(Name = "GetBowlers")]
        public IEnumerable<Bowler> Get()
        {
            var bowlersList = _bowlingContext.Bowlers
                .Include(b => b.Team)
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks").ToList();
            

            return bowlersList;
        }
    }
}