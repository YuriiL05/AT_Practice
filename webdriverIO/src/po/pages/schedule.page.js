const BasePage = require('./base.page');
const {ScheduleContainer} = require("../components");

class SchedulePage extends BasePage {
    constructor() {
        super('/showcase/angular/appointmentplanner/#/calendar');
        this.scheduleContainer = new ScheduleContainer();
    }
}

module.exports = SchedulePage;