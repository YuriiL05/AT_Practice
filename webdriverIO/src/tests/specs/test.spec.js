describe('Test suite', () => {
  const customClick = async (element) => {
    await element.waitForDisplayed();
    await element.click();
  }

  it('The firs test', async () => {
    await browser.maximizeWindow();
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    const pageTitle = await browser.getTitle();

    expect(pageTitle).toEqual(
        'Appointment Planner - Syncfusion Angular Components Showcase App',
    );
  });

  it('Name - Validation message in form', async () => {
    await $('div.sidebar-item.doctors').click();
    await $('div.specialization-types > button').click();
    await $('body > div.e-dlg-container.e-dlg-center-center > ejs-dialog > div.e-footer-content > div > button.e-control.e-btn.e-lib.e-normal.e-primary')
        .click();
    const nameValidation = await $('label#Name-info');

    expect(await nameValidation.getText()).toEqual('Enter valid name');
  });

  it('Phone - Validation message in form', async () => {
    await $('input#DoctorMobile').setValue('066123456');
    const phoneValidation = await $('label#undefined-info');
    await expect(phoneValidation).toBeDisplayed();

    expect(await phoneValidation.getText()).toEqual('Enter valid mobile number');
  })

  it('Email - Validation message in form', async () => {
    await $('input[name=Email]').setValue('test@mail');
    const emailValidation = await $('label#Email-info');
    await expect(emailValidation).toBeDisplayed();

    expect(await emailValidation.getText()).toEqual('Email address is invalid');
  })

  it('Email - Remove validation message in form', async () => {
    await $('//input[@name="Email"]').setValue('test@mail.com');
    const emailValidation = await $('label#Email-info');

    expect(await emailValidation.isDisplayed()).toEqual(false);
  })

  it('Close New Doctor dialog', async () => {
    const dialog = await $('body > div.e-dlg-container.e-dlg-center-center > ejs-dialog');
    await $('#_dialog-header > button').click();

    expect(await dialog.isDisplayed()).toEqual(false);
  })

  it('Patients - form open', async () => {
    await $('#plannerSiderBar > div > div.sidebar-item.patients').click();
    await $('#patient-wrapper > div > div.patient-operations > button').click();
    const dialog = await $('body > div:nth-child(16) > ejs-dialog')

    expect(await dialog.isDisplayed()).toEqual(true);
  });

  it('Patients - Cancel', async () => {
    const dialog = await $('body > div:nth-child(16) > ejs-dialog');
    await $('body > div:nth-child(16) > ejs-dialog > div.e-footer-content > div > button:nth-child(1)').click();

    expect(await dialog.isDisplayed()).toEqual(false);
  });

  it('Patients - Save Empty', async () => {
    await $('#patient-wrapper > div > div.patient-operations > button').click();
    const dialog = await $('body > div:nth-child(16) > ejs-dialog');
    await dialog.waitForDisplayed();
    await customClick(await $('body > div:nth-child(16) > ejs-dialog > div.e-footer-content > div > button.e-control.e-btn.e-lib.e-normal.e-primary'));
    const validationName = $('#Name-info');

    expect(await validationName.isExisting()).toEqual(true);
  });

  it('Appointments - Doctor name', async () => {
    await $('#_dialog-header > button').click();
    await $('//*[@id="plannerSiderBar"]/div/div[2]').click();
    const doctorName = await $('#grid_394431918_0_content_table > tbody > tr:nth-child(1) > td.e-rowcell.e-templatecell > a');

    await browser.execute(doctorName => {
      doctorName.style.border = 'red solid 2px';
    }, doctorName);
  });

  it('Schedule - Select column', async () => {
    await $('//*[@id="plannerSiderBar"]/div/div[3]').click();
    const col1 = await $('/html/body/app-root/app-main/div/main/app-calendar/div[1]/div[2]/div[1]/ejs-schedule/div[3]/div/table/tbody/tr[2]/td[2]/div/table/tbody/tr[1]/td[1]');
    const col2 = await $('/html/body/app-root/app-main/div/main/app-calendar/div[1]/div[2]/div[1]/ejs-schedule/div[3]/div/table/tbody/tr[2]/td[2]/div/table/tbody/tr[17]/td[1]');

    await col1.click();
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '\uE008' }]
    }]);
    await col2.click();
  });

  it('Progress Bar - loaded', async () => {
    await browser.url('https://ej2.syncfusion.com/react/demos/#/bootstrap5/progress-bar/progress-segment');
    await browser.waitUntil(async () => await $('//*[@id="point1"]/span').getText() === "80%",
        {
          timeout: 3000,
          interval: 600,
          timeoutMsg: "not loaded"
        }
    );
  });

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
