using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TurfTuskersApi.Data;
using TurfTuskersApi.Models;

namespace TurfTuskersApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlayersController : ControllerBase
{
    private readonly CricketContext _context;

    public PlayersController(CricketContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Player>>> GetAll()
    {
        return await _context.Players.Include(p => p.Match).ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Player>> GetById(int id)
    {
        var player = await _context.Players.Include(p => p.Match).FirstOrDefaultAsync(p => p.Id == id);
        return player == null ? NotFound() : Ok(player);
    }

    [HttpPost]
    public async Task<ActionResult<Player>> Create(Player player)
    {
        _context.Players.Add(player);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = player.Id }, player);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Player player)
    {
        if (id != player.Id) return BadRequest();

        _context.Entry(player).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var player = await _context.Players.FindAsync(id);
        if (player == null) return NotFound();

        _context.Players.Remove(player);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
