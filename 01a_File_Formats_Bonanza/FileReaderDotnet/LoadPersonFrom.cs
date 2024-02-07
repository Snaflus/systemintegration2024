using Newtonsoft.Json;
using CsvHelper;
using System.Globalization;
using CsvHelper.Configuration;

public static class LoadPersonFrom
{
    public static Person Csv(string fileLocation)
    {
        var configuration = new CsvConfiguration(CultureInfo.InvariantCulture)
        {
            HasHeaderRecord = false,
        };

        using StreamReader reader = new StreamReader(fileLocation);
        using CsvReader csv = new CsvReader(reader, CultureInfo.InvariantCulture);
        csv.Context.RegisterClassMap<PersonMap>();
        var records = csv.GetRecords<Person>();
        return records.First();
    }

    public static Person Json(string fileLocation)
    {
        var serializer = new JsonSerializer();
        using (StreamReader reader = File.OpenText(fileLocation))
        {
            Person person = (Person)serializer.Deserialize(reader, typeof(Person));
            return person;
        }
    }
}