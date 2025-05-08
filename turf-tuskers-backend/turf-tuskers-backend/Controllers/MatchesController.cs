using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TurfTuskersApi.Data;
using TurfTuskersApi.Models;

namespace TurfTuskersApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MatchesController : ControllerBase
{
    private readonly CricketContext _context;

    public MatchesController(CricketContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Match>>> GetAll()
    {
        return await _context.Matches.Include(m => m.Players).ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Match>> GetById(int id)
    {
        var match = await _context.Matches.Include(m => m.Players).FirstOrDefaultAsync(m => m.Id == id);
        return match == null ? NotFound() : Ok(match);
    }

    [HttpPost]
    public async Task<ActionResult<Match>> Create(Match match)
    {
        _context.Matches.Add(match);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = match.Id }, match);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Match match)
    {
        if (id != match.Id) return BadRequest();

        _context.Entry(match).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var match = await _context.Matches.FindAsync(id);
        if (match == null) return NotFound();

        _context.Matches.Remove(match);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
