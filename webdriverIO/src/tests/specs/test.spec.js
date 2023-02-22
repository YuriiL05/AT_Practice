const { page } = require('../../po');

describe('Test suite', () => {
  const customClick = async (element) => {
    await element.waitForExist();
    await element.click();
  }

  it('The firs test', async () => {
    await browser.maximizeWindow();
    await page('dashboard').open();
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it('Name - Validation message in form', async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    await page('doctors').doctorListHeader.addNewDoctorBtn.click();
    await page('doctors').addDoctorModal.saveBtn.click();
    expect(
        await page('doctors').addDoctorModal.validationInput("name").getText()
    ).toEqual('Enter valid name');
  });

  it('Phone - Validation message in form', async () => {
    await page('doctors').addDoctorModal.input("phone").setValue('066123456');
    const phoneValidation = await page('doctors').addDoctorModal.validationInput("phone");
    await expect(phoneValidation).toBeDisplayed();
    expect(await phoneValidation.getText()).toEqual('Enter valid mobile number');
  })

  it('Email - Validation message in form', async () => {
    await page('doctors').addDoctorModal.input("email").setValue('test@mail');
    const emailValidation = await page('doctors').addDoctorModal.validationInput("email");
    await expect(emailValidation).toBeDisplayed();

    expect(await emailValidation.getText()).toEqual('Email address is invalid');
  })

  it('Email - Remove validation message in form', async () => {
    await page('doctors').addDoctorModal.input("email").setValue('test@mail.com');
    const emailValidation = await page('doctors').addDoctorModal.validationInput("email");

    expect(await emailValidation.isDisplayed()).toEqual(false);
  })

  it('Close New Doctor dialog', async () => {
    await page('doctors').addDoctorModal.closeBtn.click();
    expect(await page('doctors').addDoctorModal.rootEl.isDisplayed()).toEqual(false);
  })

  it('Patients - form open', async () => {
    await page('dashboard').sideMenu.item("patients").click();
    await page("patients").patientListHeader.addNewPatientBtn.click();
    expect(await page("patients").addPatientModal.rootEl.isDisplayed()).toEqual(true);
  });

  it('Patients - Cancel', async () => {
    await page("patients").addPatientModal.closeBtn.click();
    expect(await page("patients").addPatientModal.rootEl.isDisplayed()).toEqual(false);
  });

  it('Patients - Save Empty', async () => {
    await page("patients").patientListHeader.addNewPatientBtn.click();
    await page("patients").addPatientModal.rootEl.waitForDisplayed();
    await customClick(
          await page("patients").addPatientModal.saveBtn
        );

    expect(
        await page("patients").addPatientModal.validationInput("name").isExisting()
    ).toEqual(true);
    await page("patients").addPatientModal.closeBtn.click();
  });

  it('Appointments - Doctor name', async () => {
    await page("dashboard").open();

    const menuName = await page("dashboard").sideMenu.name;
    await browser.execute(menuName => {
      menuName.style.border = 'red solid 2px';
    }, menuName);
  });

  it('Schedule - Select column', async () => {
    await page("schedule").open();
    await page("schedule").scheduleContainer.cell("start").click();
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '\uE008' }]
    }]);
    await page("schedule").scheduleContainer.cell("finish").click();
  });

  // it('Progress Bar - loaded', async () => {
  //   await browser.url('https://ej2.syncfusion.com/react/demos/#/bootstrap5/progress-bar/progress-segment');
  //   await browser.waitUntil(async () => await $('//*[@id="point1"]/span').getText() === "80%",
  //       {
  //         timeout: 3000,
  //         interval: 600,
  //         timeoutMsg: "not loaded"
  //       }
  //   );
  // });

  it('Local storage - add and read', async () => {
    const key = "localStorageKey";
    const value = "localStorageValue";

    await browser.execute((key, value) => {
      window.localStorage.setItem(key, value);
    }, key, value);

    const readValue = await browser.execute(key => {
      return window.localStorage.getItem(key);
    }, key);

    expect(readValue).toEqual('localStorageValue');
  });
});
