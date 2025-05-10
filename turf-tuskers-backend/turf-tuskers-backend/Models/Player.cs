public class Player
{
    public int Id { get; set; }
    public int MatchId { get; set; }
    public string Name { get; set; }
    public string Team { get; set; }
    public string Role { get; set; }

    public Match Match { get; set; }
}
