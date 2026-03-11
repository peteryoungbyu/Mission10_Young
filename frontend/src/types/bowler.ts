// These types are required since Team is inside Bowler. It allows us to also display the team name.

export type Team = {
  teamId: number;
  teamName: string;
  captainId: number;
};

export type Bowler = {
  bowlerId: number;
  bowlerLastName: string;
  bowlerFirstName: string;
  bowlerMiddleInit: string | null;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  teamId: number;
  team: Team;
};
