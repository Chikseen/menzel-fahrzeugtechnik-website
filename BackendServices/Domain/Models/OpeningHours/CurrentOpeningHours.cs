namespace Domain.Models.OpeningHours;

public class CurrentOpeningHours
{
    public bool OpenNow { get; set; }
    public List<string> WeekdayDescriptions { get; set; } = [];
    public DateTime NextOpenTime { get; set; }
    public DateTime NextCloseTime { get; set; }
}
