function greetUser (name, date) {
    let h = date.getHours()
    if (h == 23 || h < 5) {
        return "Good night, " + name + "!";
    } else if (h >= 5 && h < 11) {
        return "Good morning, " + name + "!";
    } else if (h >= 11 && h < 17) {
        return "Good afternoon, " + name + "!";
    } else {
        return "Good evening, " + name + "!";
    }
}
exports.greetUser = greetUser;