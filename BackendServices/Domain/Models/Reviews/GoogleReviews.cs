namespace Domain.Models.Reviews;

public class GoogleReviews
{
    public List<Review> Reviews { get; set; } = [];
    public double Rating { get; set; } = 5;
}