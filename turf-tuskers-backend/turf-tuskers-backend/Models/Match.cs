
public class Match
{
    public int Id { get; set; }
    public string TeamA { get; set; }
    public string TeamB { get; set; }
    public DateTime MatchDate { get; set; }
    public string Venue { get; set; }
    public string Status { get; set; }

    public ICollection<Player> Players { get; set; }
}
