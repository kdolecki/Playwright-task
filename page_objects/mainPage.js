function mainPage(page) {
    const frame = page.frameLocator('iframe[name="framelive"]');
    const searchInput = frame.getByPlaceholder('Search our catalog');
    
    const navigating = async () => {
        await page.goto('https://demo.prestashop.com/#/en/front');
    };

    const searchingForProduct = async (productName) => {
        await searchInput.fill(productName);
        await searchInput.press('Enter');
    };

    return {
        navigating,
        searchingForProduct
    };
}

export default mainPage;
