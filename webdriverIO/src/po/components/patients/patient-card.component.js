const BaseComponent = require('../common/base.component');

class PatientCardComponent extends BaseComponent {
    constructor(id) {
        super(`tr[data-uid="grid-row${id}"]`);
    }

    get name() {
        return this.rootEl.$('.patient-name');
    }

    get gender() {
        return this.rootEl.$('td:nth-child(3)');
    }
}

module.exports = PatientCardComponent;
