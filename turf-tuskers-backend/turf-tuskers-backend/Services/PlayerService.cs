using Microsoft.EntityFrameworkCore;
using turf_tuskers_backend.Data;

namespace turf_tuskers_backend.Services;

public class PlayerService
{
    private readonly TurfTuskersContext _context;

    public PlayerService(TurfTuskersContext context)
    {
        _context = context;
    }

    public async Task<List<Player>> GetAllAsync()
    {
        return await _context.Players.Include(p => p.Match).ToListAsync();
    }

    public async Task<Player?> GetByIdAsync(int id)
    {
        return await _context.Players.Include(p => p.Match).FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task<Player> CreateAsync(Player player)
    {
        _context.Players.Add(player);
        await _context.SaveChangesAsync();
        return player;
    }

    public async Task<bool> UpdateAsync(int id, Player updatedPlayer)
    {
        if (id != updatedPlayer.Id) return false;
        _context.Entry(updatedPlayer).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var player = await _context.Players.FindAsync(id);
        if (player == null) return false;

        _context.Players.Remove(player);
        await _context.SaveChangesAsync();
        return true;
    }
}
