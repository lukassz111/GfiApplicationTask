﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service = GfiApp.Service;
using Model = GfiApp.Model;
namespace GfiApp.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private Service.IUserService userService;

        public UserController(Service.IUserService userService)
        {
            this.userService = userService;
        }
        
        public IEnumerable<int> Index()
        {
            var users = userService.getUsers();
            List<int> ids = new List<int>(users.Count);
            foreach(var user in users)
            {
                ids.Add(user.id);
            }
            return ids;
        }

        [HttpGet("{id}")]
        public ActionResult<Model.User> Details(int id)
        {
            var users = userService.getUsers();
            foreach(var user in users)
            {
                if(user.id == id)
                    return Ok(user);
            }
            return NotFound(null);
        }

        [HttpPost("{id}")]
        public ActionResult Edit(int id, [FromBody] Model.User user)
        {
            if(id != user.id)
                return BadRequest();
            if (userService.updateUser(user))
                return Ok();
            return NotFound();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            return Ok(userService.deleteUser(id));
        }
    }
}