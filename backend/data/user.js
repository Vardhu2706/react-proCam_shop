import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@procamshop.com",
    password: bcrypt.hashSync("1415926535", 10),
    isAdmin: true,
  },
  {
    name: "Vardhaman",
    email: "vardhaman@procamshop.com",
    password: bcrypt.hashSync("1415926535", 10),
  },
  {
    name: "Vardhu",
    email: "vardhu@procamshop.com",
    password: bcrypt.hashSync("1415926535", 10),
  },
];

export default users;
