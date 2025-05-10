
using Microsoft.EntityFrameworkCore;
using turf_tuskers_backend.Data;

namespace turf_tuskers_backend.Services;

public class MatchService
{
    private readonly TurfTuskersContext _context;

    public MatchService(TurfTuskersContext context)
    {
        _context = context;
    }

    public async Task<List<Match>> GetAllAsync()
    {
        return await _context.Matches.Include(m => m.Players).ToListAsync();
    }

    public async Task<Match?> GetByIdAsync(int id)
    {
        return await _context.Matches.Include(m => m.Players).FirstOrDefaultAsync(m => m.Id == id);
    }

    public async Task<Match> CreateAsync(Match match)
    {
        _context.Matches.Add(match);
        await _context.SaveChangesAsync();
        return match;
    }

    public async Task<bool> UpdateAsync(int id, Match updatedMatch)
    {
        if (id != updatedMatch.Id) return false;
        _context.Entry(updatedMatch).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var match = await _context.Matches.FindAsync(id);
        if (match == null) return false;

        _context.Matches.Remove(match);
        await _context.SaveChangesAsync();
        return true;
    }
}
