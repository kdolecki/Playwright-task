import { expect } from '@playwright/test';

function resultsPage(page) {
    const frame = page.frameLocator('iframe[name="framelive"]');
    const firstProduct = frame.getByRole('link', { name: 'Hummingbird printed t-shirt' }).first();
    const addToCartButton = frame.getByRole('button', { name: 'Add to cart' });
    const cartModal = frame.locator('div#blockcart-modal .modal-content');
    const proceedToCheckoutButton = frame.getByRole('link', { name: 'Proceed to checkout' });
    const cartProductName = frame.locator('div#blockcart-modal .modal-content').getByRole('link', { name: 'Hummingbird printed t-shirt' });

    const selectingFirstProduct = async () => {
        await firstProduct.click();
    };

    const addingProductToCart = async () => {
        await addToCartButton.click();
        await cartModal.waitFor({ state: 'visible', timeout: 60000 });
        await proceedToCheckoutButton.click();
    };

    const validateSearchResults = async () => {
        const isProductVisible = await firstProduct.isVisible();
        expect(isProductVisible).toBeTruthy();
    };

    const validateCartProduct = async () => {
        const isProductInCart = await cartProductName.isVisible();
        expect(isProductInCart).toBeTruthy();
    };

    return {
        selectingFirstProduct,
        addingProductToCart,
        validateSearchResults,
        validateCartProduct,
    };
};

export default resultsPage;
