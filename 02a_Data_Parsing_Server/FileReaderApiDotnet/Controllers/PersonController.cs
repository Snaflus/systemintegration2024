using Microsoft.AspNetCore.Mvc;

namespace FileReaderApiDotnet.Controllers;

[ApiController]
[Route("[controller]")]
public class PersonController : ControllerBase
{
    private static readonly Person person = new Person
    {
        name = "Casper",
        age = 24,
        hobbies = new List<string> { "coding", "eating", "gaming" }
    };

    private readonly ILogger<PersonController> _logger;

    public PersonController(ILogger<PersonController> logger)
    {
        _logger = logger;
    }

    [HttpGet, ActionName("Json")]
    public Person Get()
    {
        return person;
    }
}