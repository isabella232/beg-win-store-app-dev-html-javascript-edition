﻿// ----------------------- Object extensions --------------------------------

Object.prototype.toTemplatedString = function (formatString, defaults) {
    var obj = this;
    if (typeof (formatString) === "string") {
        return formatString.replace(/\{\{|\}\}|\{([A-Za-z0-9]+)\}/g, function (match, capture) {
            if (match === "{{") { return "{"; }
            if (match === "}}") { return "}"; }
            return obj[capture] || (defaults && defaults[capture]) || "";
        });
    } else {
        return obj;
    }
};


// ----------------------- Date extensions --------------------------------

Date.prototype.addDays = function (n) {
    var year = this.getFullYear();
    var month = this.getMonth();
    var date = this.getDate();

    date += n;

    return new Date(year, month, date);
}

Date.prototype.addMonths = function (n) {
    var year = this.getFullYear();
    var month = this.getMonth();
    var date = this.getDate();

    month += n;

    return new Date(year, month, date);
}

Date.prototype.addYears = function (n) {
    var year = this.getFullYear();
    var month = this.getMonth();
    var date = this.getDate();

    year += n;

    return new Date(year, month, date);
}

Date.prototype.removeTimePart = function () {
    var year = this.getFullYear();
    var month = this.getMonth();
    var date = this.getDate();

    return new Date(year, month, date);
}

Date.prototype.firstDayOfMonth = function () {
    var year = this.getFullYear();
    var month = this.getMonth();

    return new Date(year, month, 1);
}

Date.prototype.lastDayOfMonth = function () {
    // last day of month is the day before the first day of the next month
    return this.firstDayOfMonth().addMonths(1).addDays(-1);
}

