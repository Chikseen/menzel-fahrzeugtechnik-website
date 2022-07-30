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

    public Openinghours(int id, String days, Boolean isOpen, DateTime open, DateTime close, Boolean showCutomText, String customText, Boolean isTimeLimited, DateTime startDate, DateTime endDate, int orderposition)
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
}

public class OpeninghoursId
{
    public int id { get; set; }
}


//id SERIAL PRIMARY KEY, days VARCHAR(255), open VARCHAR(64), close VARCHAR(64), isOpen boolean, showCutomText boolean, customText VARCHAR(255)
