using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GfiApp.Model;

namespace GfiApp.Service
{
    public class UserService : IUserService
    {
        List<User> users;
        public UserService()
        {
            users = new List<User>(3);
            var user1 = new User
            {
                id = 1,
                name = "Rufus",
                surname = "Dubois",
                dateOfBirth = "12-03-1997",
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
                dateOfBirth = "12-03-1997",
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
                dateOfBirth = "12-03-1997",
                mobileNumber = 708056463,
                city = "Escondido",
                street = "Moreno Valley",
                houseNumber = 0
            };
            users.Add(user1);
            users.Add(user2);
            users.Add(user3);
        }

        public bool deleteUser(int id)
        {
            lock(users)
            {
                for (var i = 0; i < users.Count; i++)
                {
                    if (users[i].id == id)
                    {
                        users.RemoveAt(i);
                        return true;
                    }
                }
            }
            return false;
        }

        public List<User> getUsers()
        {
            lock(users)
            {
                return users;
            }
        }

        public bool updateUser(User user)
        {
            lock(users)
            {
                for (var i = 0; i < users.Count; i++)
                {
                    if (users[i].id == user.id)
                    {
                        users[i] = user;
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
