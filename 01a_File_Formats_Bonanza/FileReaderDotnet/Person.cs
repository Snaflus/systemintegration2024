using CsvHelper.Configuration;

public class Person
{
    public string name {get; set;}
    public int age {get; set;}
    public List<string> hobbies {get; set;}
    private string hobbiesToString => string.Join(", ", hobbies);
    public override string ToString()
    {
        return $"Name:{name}, Age:{age}, Hobbies:{hobbiesToString}";
    }
}

public class PersonMap : ClassMap<Person>
{
    public PersonMap()
    {
        Map(p => p.name).Name("name");
        Map(p => p.age).Name("age");
        Map(p => p.hobbies).Name("hobbies");
    }
}