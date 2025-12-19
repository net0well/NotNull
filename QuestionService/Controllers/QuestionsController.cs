using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuestionService.Data;
using QuestionService.DTOs;
using QuestionService.Models;

namespace QuestionService.Controllers;

[ApiController]
[Route("[controller]")]
public class QuestionsController(QuestionDbContext dbContext) : ControllerBase
{
    [Authorize]
    [HttpPost]
    public async Task<ActionResult<Question>> CreateQuestion(CreateQuestionDto dto)
    {
        var validTags = await dbContext.Tags.Where(x => dto.Tags.Contains(x.Slug)).ToListAsync();
        
        var missing = dto.Tags.Except(validTags.Select(tag => tag.Slug).ToList()).ToList();
        
        if(missing.Count() != 0) return BadRequest($"Invalid  tags: {string.Join(", ", missing)}");
        
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        var name = User.FindFirstValue("name");

        if (userId is null || name is null) return BadRequest("Cannot get user details");

        var question = new Question
        {
            Title = dto.Title,
            Content = dto.Content,
            TagSlugs = dto.Tags,
            AskerId = userId,
            AskerDisplayName = name
        };

        dbContext.Questions.Add(question);
        await dbContext.SaveChangesAsync();
        
        return Created($"/questions/{question.Id}", question);

    }
}