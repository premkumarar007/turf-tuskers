using Microsoft.AspNetCore.Mvc;
using turf_tuskers_backend.Services;

namespace turf_tuskers_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MatchesController : ControllerBase
{
    private readonly MatchService _matchService;

    public MatchesController(MatchService matchService)
    {
        _matchService = matchService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Match>>> GetAll()
    {
        var matches = await _matchService.GetAllAsync();
        return Ok(matches);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Match>> GetById(int id)
    {
        var match = await _matchService.GetByIdAsync(id);
        return match == null ? NotFound() : Ok(match);
    }

    [HttpPost]
    public async Task<ActionResult<Match>> Create(Match match)
    {
        var created = await _matchService.CreateAsync(match);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Match match)
    {
        var result = await _matchService.UpdateAsync(id, match);
        return result ? NoContent() : BadRequest();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await _matchService.DeleteAsync(id);
        return result ? NoContent() : NotFound();
    }
}
