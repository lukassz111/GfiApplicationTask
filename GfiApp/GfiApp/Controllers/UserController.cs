using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GfiApp.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GfiApp.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<User> List()
        {
            var users = new List<User>(4);

            var user1 = new User
            {
                id = 1,
                name = "Rufus",
                surname = "Dubois",
                dateOfBirth = new DateTime(1997, 03, 12),
                mobileNumber = 748045516,
                city = "Lyon",
                street = "Baltimore",
                houseNumber = 0
            };
            var user2 = new User
            {
                id = 2,
                name = "Alexander",
                surname = "Adams",
                dateOfBirth = new DateTime(1997, 03, 12),
                mobileNumber = 863885255,
                city = "Houston",
                street = "Zurich",
                houseNumber = 0
            };
            var user3 = new User
            {
                id = 3,
                name = "Moira",
                surname = "Rowlands",
                dateOfBirth = new DateTime(1997, 03, 12),
                mobileNumber = 708056463,
                city = "Escondido",
                street = "Moreno Valley",
                houseNumber = 0
            };
            users.Add(user1);
            users.Add(user2);
            users.Add(user3);
            return users;
        }
        /*
        // GET: User
        public ActionResult Index()
        {
            return View();
        }

        // GET: User/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: User/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: User/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: User/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: User/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: User/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: User/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
        //*/
    }
}