import { test, expect } from '@playwright/test';
import mainPage from '../page_objects/mainPage';
import resultsPage from '../page_objects/resultsPage';
import cartPage from '../page_objects/cartPage';
import checkoutPage from '../page_objects/checkoutPage';

test.describe('PrestaShop Purchase Flow', () => {
    test('should purchase a product successfully', async ({ page }) => {
        const main = mainPage(page);
        const results = resultsPage(page);
        const cart = cartPage(page);
        const checkout = checkoutPage(page);

        await main.navigating();
        await main.searchingForProduct('T-shirt');
        await results.selectingFirstProduct();
        await results.addingProductToCart();
        console.log('Product added to cart and proceeding to checkout');

        await cart.proceedingToCheckout();
        console.log('Clicked proceed to checkout button in cart page');

        const customerDetails = {
            firstName: 'Kamil',
            lastName: 'Dol',
            email: 'kamil.dol@example.com',
            address: 'Beverly Hills',
            city: 'Los Angeles',
            postcode: '90210',
            country: 'United States',
            state: 'California',
        };

        await checkout.fillingCheckoutDetails(customerDetails);
        await page.pause();
    });
});
