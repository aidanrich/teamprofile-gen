const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, "Manager")
        this.office = office;
    }
    getOffice() {
        return this.office
    }
    getRole() {
        return "Manager"
    }
}
var chuck = new Manager("phil", 3, "email@email.com", "shoes")
console.table(chuck.getName())

module.exports = Manager;