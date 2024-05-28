function cartPage(page) {
    const frame = page.frameLocator('iframe[name="framelive"]');
    const proceedToCheckoutButton = frame.getByRole('link', { name: 'Proceed to checkout' });

    const proceedingToCheckout = async () => {
        await proceedToCheckoutButton.waitFor({ state: 'visible', timeout: 60000 });
        await proceedToCheckoutButton.click();
        await page.waitForTimeout(5000); 
        await proceedToCheckoutButton.click();
    };

    return {
        proceedingToCheckout
    };
}

export default cartPage;
