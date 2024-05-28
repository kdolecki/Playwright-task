// const checkoutPage = (page) => {
//     const frame = page.frameLocator('iframe[name="framelive"]');
//     const titleRadioButton = frame.getByLabel('Mr.');
//     const firstNameInput = frame.getByLabel('First name');
//     const lastNameInput = frame.getByLabel('Last name');
//     const emailInput = frame.getByLabel('Email');
//     const termsCheckbox = frame.getByText('I agree to the terms and conditions and the privacy policy');
//     const privacyCheckbox = frame.getByText('Customer data privacy');
//     const continueButton = frame.getByRole('button', { name: 'Continue' });
//     const paymentHeading = frame.getByRole('heading', { name: 'Payment' });
//     const placeOrderButton = frame.locator('button').filter({ hasText: 'Place order' });

//     const fillingCheckoutDetails = async (details) => {
//         await titleRadioButton.check();
//         await firstNameInput.fill(details.firstName);
//         await lastNameInput.fill(details.lastName);
//         await emailInput.fill(details.email);
//         await termsCheckbox.check();
//         await privacyCheckbox.check();
//         await continueButton.click();
//         await frame.getByLabel('Address', { exact: true }).fill(details.address);
//         await frame.getByLabel('City').fill(details.city);
//         await frame.getByLabel('Country').selectOption(details.country);
//         await frame.getByLabel('State').selectOption(details.state);
//         await frame.getByLabel('Zip/Postal Code').fill(details.postcode);
//         await continueButton.click();
//     //    await frame.getByRole('heading', { name: 'Shipping Method' }).waitFor({ state: 'visible', timeout: 60000 });
//     await page.waitForTimeout(3000); 
//     await continueButton.click();
        
//         await page.waitForTimeout(3000); // Wait for the payment page to load
//         await paymentHeading.waitFor({ state: 'visible', timeout: 60000 });

//         // Remove disabled attribute and class from the "Place order" button
//         await page.evaluate(() => {
//             const placeOrderBtn = document.querySelector('button.btn.btn-primary.center-block.disabled');
//             if (placeOrderBtn) {
//                 placeOrderBtn.removeAttribute('disabled');
//                 placeOrderBtn.classList.remove('disabled');
//             }
//         });

//         // Click the "Place order" button using force
//         await placeOrderButton.click({ force: true });
//     };

//     return {
//         fillingCheckoutDetails
//     };
// };

// export default checkoutPage;

const checkoutPage = (page) => {
    const frame = page.frameLocator('iframe[name="framelive"]');
    const titleRadioButton = frame.getByLabel('Mr.');
    const firstNameInput = frame.getByLabel('First name');
    const lastNameInput = frame.getByLabel('Last name');
    const emailInput = frame.getByLabel('Email');
    const termsCheckbox = frame.getByText('I agree to the terms and conditions and the privacy policy');
    const privacyCheckbox = frame.getByText('Customer data privacy');
    const continueButton = frame.getByRole('button', { name: 'Continue' });
    const paymentHeading = frame.getByRole('heading', { name: 'Payment' });
    const placeOrderButton = frame.locator('button').filter({ hasText: 'Place order' });
    const serviceTermsCheckbox = frame.getByLabel('I agree to the terms of service and will adhere to them unconditionally.');

    const fillingCheckoutDetails = async (details) => {
        await titleRadioButton.check();
        await firstNameInput.fill(details.firstName);
        await lastNameInput.fill(details.lastName);
        await emailInput.fill(details.email);
        await termsCheckbox.check();
        await privacyCheckbox.check();
        await continueButton.click();

        // Fill address details
        await frame.getByLabel('Address', { exact: true }).fill(details.address);
        await frame.getByLabel('City').fill(details.city);
        await frame.getByLabel('Country').selectOption(details.country);
        await frame.getByLabel('Zip/Postal Code').fill(details.postcode);
        await frame.getByLabel('State').selectOption(details.state);
        await continueButton.click();
    //    await frame.getByRole('heading', { name: 'Shipping Method' }).waitFor({ state: 'visible', timeout: 60000 });
        await page.waitForTimeout(3000); 
        await continueButton.click();
        
        await page.waitForTimeout(3000); // Wait for the payment page to load
        await paymentHeading.waitFor({ state: 'visible', timeout: 60000 });

        // Check the service terms checkbox
        await serviceTermsCheckbox.check();

        // Remove disabled attribute and class from the "Place order" button
        await page.evaluate(() => {
            const placeOrderBtn = document.querySelector('button.btn.btn-primary.center-block.disabled');
            if (placeOrderBtn) {
                placeOrderBtn.removeAttribute('disabled');
                placeOrderBtn.classList.remove('disabled');
            }
        });

        // Click the "Place order" button using force
        await placeOrderButton.click({ force: true });

        // Verify that the order is confirmed
        const orderConfirmationText = await frame.getByText('Your order is confirmed').innerText();
        expect(orderConfirmationText).toContain('Your order is confirmed');
    };

    return {
        fillingCheckoutDetails
    };
};

export default checkoutPage;
