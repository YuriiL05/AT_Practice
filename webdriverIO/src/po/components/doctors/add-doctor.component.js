const BaseComponent = require('../common/base.component');

class AddDoctorComponent extends BaseComponent {
    constructor() {
        super('.new-doctor-dialog');
    }

    get closeBtn() {
        return this.rootEl.$('.button-container button.e-btn:not(.e-primary)');
    }

    get saveBtn() {
        return this.rootEl.$('.button-container button.e-primary');
    }

    /**
     * @param name {'name' | 'phone' | 'email' | 'education' | 'designation'}
     */
    input(name) {
        const selectors = {
            name: '#Name input',
            phone: 'input#DoctorMobile',
            email: 'input[name="Email"]',
            education: 'input[name="Education"]',
            designation: 'input[name="Designation"]',
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

module.exports = AddDoctorComponent;
