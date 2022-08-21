public class Openinghours
{
    public int id { get; set; }

    public String days { get; set; }

    public Boolean isOpen { get; set; }

    public DateTime open { get; set; }

    public DateTime close { get; set; }

    public Boolean showCutomText { get; set; }

    public String customText { get; set; }

    public Boolean isTimeLimited { get; set; }

    public DateTime startDate { get; set; }

    public DateTime endDate { get; set; }
    public int orderposition { get; set; }
    public Boolean allowWeekdays { get; set; }
    public int[] weekdays { get; set; }


    public Openinghours(int id, String days, Boolean isOpen, DateTime open, DateTime close, Boolean showCutomText, String customText, Boolean isTimeLimited, DateTime startDate, DateTime endDate, int orderposition, Boolean allowWeekdays, String weekdays)
    {
        this.id = id;
        this.days = days;
        this.isOpen = isOpen;
        this.open = open;
        this.close = close;
        this.showCutomText = showCutomText;
        this.customText = customText;
        this.isTimeLimited = isTimeLimited;
        this.startDate = startDate;
        this.endDate = endDate;
        this.orderposition = orderposition;
        this.allowWeekdays = allowWeekdays;
        if (weekdays.Count() > 0) this.weekdays = weekdays.Split(",#,").Select(x => Int32.Parse(x)).ToArray();
        else this.weekdays = new int[0];
    }
}

public class NewOpeninghours
{
    public String days { get; set; }

    public Boolean isOpen { get; set; }

    public DateTime open { get; set; }

    public DateTime close { get; set; }

    public Boolean showCutomText { get; set; }

    public String customText { get; set; }

    public Boolean isTimeLimited { get; set; }

    public DateTime startDate { get; set; }

    public DateTime endDate { get; set; }
    public int orderposition { get; set; }
    public Boolean allowWeekdays { get; set; }
    public int[] weekdays { get; set; }
}

public class EditOpeninghours
{
    public int id { get; set; }

    public String days { get; set; }

    public Boolean isOpen { get; set; }

    public DateTime open { get; set; }

    public DateTime close { get; set; }

    public Boolean showCutomText { get; set; }

    public String customText { get; set; }

    public Boolean isTimeLimited { get; set; }

    public DateTime startDate { get; set; }

    public DateTime endDate { get; set; }
    public int orderposition { get; set; }
    public Boolean allowWeekdays { get; set; }
    public int[] weekdays { get; set; }
}
public class OpeninghoursId
{
    public int id { get; set; }
}

public class OpeninghoursWeekdays
{
    public DateTime open { get; set; }
    public DateTime close { get; set; }
    public int weekday { get; set; }
    public String name { get; set; }
    public String[] weekdayNames = { "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag" };

    public OpeninghoursWeekdays(DateTime open, DateTime close, int weekday)
    {
        this.open = open;
        this.close = close;
        this.weekday = weekday;
        this.name = weekdayNames[weekday];
    }
}