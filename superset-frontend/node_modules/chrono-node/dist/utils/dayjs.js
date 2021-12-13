"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.implySimilarTime = exports.assignSimilarTime = exports.assignSimilarDate = exports.assignTheNextDay = void 0;
function assignTheNextDay(component, targetDayJs) {
    targetDayJs = targetDayJs.add(1, "day");
    assignSimilarDate(component, targetDayJs);
    implySimilarTime(component, targetDayJs);
}
exports.assignTheNextDay = assignTheNextDay;
function assignSimilarDate(component, targetDayJs) {
    component.assign("day", targetDayJs.date());
    component.assign("month", targetDayJs.month() + 1);
    component.assign("year", targetDayJs.year());
}
exports.assignSimilarDate = assignSimilarDate;
function assignSimilarTime(component, targetDayJs) {
    component.assign("hour", targetDayJs.hour());
    component.assign("minute", targetDayJs.minute());
    component.assign("second", targetDayJs.second());
    component.assign("millisecond", targetDayJs.millisecond());
    component.assign("timezoneOffset", targetDayJs.utcOffset());
}
exports.assignSimilarTime = assignSimilarTime;
function implySimilarTime(component, targetDayJs) {
    component.imply("hour", targetDayJs.hour());
    component.imply("minute", targetDayJs.minute());
    component.imply("second", targetDayJs.second());
    component.imply("millisecond", targetDayJs.millisecond());
    component.imply("timezoneOffset", targetDayJs.utcOffset());
}
exports.implySimilarTime = implySimilarTime;
