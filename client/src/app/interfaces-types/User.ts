enum Role {
  User = 'user',
  Manager = 'manager',
  Admin = 'admin',
}

interface User {
  id: string;
  name: string;
  email: string;
  manager: User;
  role: Role;
  photo: string;
  active: boolean;
}
