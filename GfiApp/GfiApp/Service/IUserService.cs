using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Model = GfiApp.Model;
namespace GfiApp.Service
{
    public interface IUserService
    {
        List<Model.User> getUsers();
        bool updateUser(Model.User user);
        bool deleteUser(int id);
    }
}
