const BaseComponent = require('../common/base.component');

class AddPatientComponent extends BaseComponent {
    constructor() {
        super('.new-patient-dialog');
    }

    get closeBtn() {
        return this.rootEl.$('.button-container button.e-btn:not(.e-primary)');
    }

    get saveBtn() {
        return this.rootEl.$('.button-container button.e-primary');
    }

    /**
     * @param name {'name' | 'phone' | 'email' | 'symptoms'}
     */
    input(name) {
        const selectors = {
            name: '#Name input',
            phone: 'input#PatientMobile',
            email: 'input[name="Email"]',
            symptoms: 'input[name="Symptoms"]',
        };

        return this.rootEl.$(selectors[name.toLowerCase()]);
    }

    /**
     * @param name {'name' | 'phone' | 'email'}
     */
    validationInput(name) {
        const selectors = {
            name: 'label#Name-info',
            phone: 'label#undefined-info',
            email: 'label#Email-info',
        };

        return this.rootEl.$(selectors[name.toLowerCase()]);
    }
}

module.exports = AddPatientComponent;
