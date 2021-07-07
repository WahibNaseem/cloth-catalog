using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
  public class ProductRepository : IProductRepository
  {
    private readonly StoreContext _context;
    public ProductRepository(StoreContext context)
    {
      _context = context;

    }
    public async Task<Product> GetProductByIdAsync(int id)
    {
      var product = await _context.Products.Include(p => p.ProductType).Include(pb => pb.ProductBrand).FirstOrDefaultAsync(x => x.Id == id);
      return product;
    }

    public async Task<IReadOnlyList<Product>> GetProductsAsync()
    {
      var products = await _context.Products.Include(p => p.ProductType).Include(pb => pb.ProductBrand).ToListAsync();
      return products;

    }
  }
}