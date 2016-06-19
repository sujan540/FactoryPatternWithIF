function Person(options, defaultRate) {
    this.hourRate = options.hourRate || defaultRate;
    this.firstName = options.firstName || "no first name";
    this.lastName = options.lastName || "no last name";
    this.id = options.id || "-9999999999";
}

function Manager(options) {
    Person.call(this, options, 200);
    this.yearBonus = options.yearBonus || "200000";
}
function Developer(options) {
    Person.call(this, options, 100);
    this.subject = options.subject || "history";
}

function createPerson(options) {
    return new {
        "Manager": Manager,
        "Developer": Developer
    }[options.personType](options);
}


