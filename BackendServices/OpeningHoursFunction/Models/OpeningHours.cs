using System;
using System.Collections.Generic;

namespace OpeningHoursFunction.Models;

public class OpeningHours
{
    public CurrentOpeningHours CurrentOpeningHours { get; set; }
}

public class CurrentOpeningHours
{
    public bool OpenNow { get; set; }
    public List<string> WeekdayDescriptions { get; set; }
    public DateTime NextOpenTime { get; set; }
}
