using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Mission10_Young.Data;

namespace Mission10_Young.Data;

public partial class BowlingLeagueContext : DbContext
{
    public BowlingLeagueContext(DbContextOptions<BowlingLeagueContext> options) : base(options)
    {
    }

    public DbSet<Bowler> Bowlers { get; set; }



    public virtual DbSet<Team> Teams { get; set; }
}
