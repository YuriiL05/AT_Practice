const BaseComponent = require('../common/base.component');

class ScheduleContainerComponent extends BaseComponent {
    constructor() {
        super('.schedule-container .e-schedule');
    }

    /**
     * @param name {'start' | 'finish'}
     */
    cell(name) {
        const selectors = {
            start: 'td[data-date="1596346200000"]',
            finish: 'td[data-date="1596376800000"]',
        };

        return this.rootEl.$(selectors[name.toLowerCase()]);
    }
}

module.exports = ScheduleContainerComponent;
