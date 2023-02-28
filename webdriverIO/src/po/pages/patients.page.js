const BasePage = require('./base.page');
const { AddPatientModal, PatientListHeader, PatientCard } = require('../components');

class PatientsPage extends BasePage {
    constructor() {
        super('/showcase/angular/appointmentplanner/#/patients');
        this.addPatientModal = new AddPatientModal();
        this.patientListHeader = new PatientListHeader();
    }

    specialistCard(id) {
        return new PatientCard(id);
    }
}

module.exports = PatientsPage;
