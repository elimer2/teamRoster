// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    if (typeof name !== 'string' || name === '') {
      throw new Error("Error. Expected a string for name.");
    };

    if (typeof id !== 'string' || id === '') {
      throw new Error("Error. Expected a string for id.");
    };

    if (typeof email !== 'string' || email === '') {
      throw new Error("Error. Expected a string for email.");
    };

    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
