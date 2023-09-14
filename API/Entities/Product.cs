namespace API.Entities
{
    public class Product // set up the product database structure
    {
        public int Id { get; set; } //EF will use Id as primary key by default
        public string Name { get; set; }
        public string Description { get; set; }
        public long Price { get; set; }
        public string PictureUrl { get; set; }
        public string Type { get; set; }
        public string Brand { get; set; }
        public int QuantityInStock { get; set; }
    }
}