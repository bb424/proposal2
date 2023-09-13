using API.Entities;
using Microsoft.EntityFrameworkCore;
//Entity framework converts the code into SQL comands to interact with the database
namespace API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {

        }
        //Creates a Table called Products based on fields in Product.cs
        public DbSet<Product> Products { get; set; }
    }
}