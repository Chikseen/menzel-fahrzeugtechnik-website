using System.Security.Cryptography;

public class SecureString
{
    public string CreateSecureRandomString()
    {
        return Convert.ToBase64String(RandomNumberGenerator.GetBytes(64));
    }
}