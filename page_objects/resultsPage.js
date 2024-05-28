function resultsPage(page) {
    const frame = page.frameLocator('iframe[name="framelive"]');
    const firstProduct = frame.getByRole('link', { name: 'Hummingbird printed t-shirt' }).first();
    const addToCartButton = frame.locator('button[data-button-action="add-to-cart"]');
    const proceedToCheckoutButton = frame.getByRole('link', { name: 'Proceed to checkout' });

    const selectingFirstProduct = async () => {
        await firstProduct.click();
    };

    const addingProductToCart = async () => {
        await addToCartButton.click();
        await frame.locator('div#blockcart-modal .modal-content').waitFor({ state: 'visible', timeout: 6000 });
        await proceedToCheckoutButton.click();
    };

    return {
        selectingFirstProduct,
        addingProductToCart
    };
}

export default resultsPage;
