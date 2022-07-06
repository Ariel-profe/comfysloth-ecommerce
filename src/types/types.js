export const types = {

    uiOpenSidebar:           '[ui] Sidebar Open',
    uiCloseSidebar:          '[ui] Sidebar Close',

    getProductsBegin:        '[product] Get Products Begin',
    getProductsSuccess:      '[product] Get Products Success',
    getProductsError:        '[product] Get Products Error',
    getSingleProductBegin:   '[product] Get Single Product Begin',
    getSingleProductSuccess: '[product] Get Single Product Success',
    getSingleProductError:   '[product] Get Single Product Error',
    loadProducts:            '[product] Load Products',
    
    setGridView:             '[filter] Set Grid View',
    setListView:             '[filter] Set List View',
    updateSort:              '[filter] Update Sort',
    sortProducts:            '[filter] Sort products',
    updateFilters:           '[filter] Update Filters',
    filterProducts:          '[filter] Filter Products',
    clearFilters:            '[filter] Clear Filters',

    addToCart:               '[cart] Add To Cart',
    removeCartItem:          '[cart] Remove Cart Item',
    toggleCartItemAmount:    '[cart] Toggle Cart Item Amount',
    clearCart:               '[cart] Clear Cart',
    countCartTotals:         '[cart] Count cart totals',
    
    authChecking:            '[auth] Checking login state',
    authCheckingFinish:      '[auth] Finish checking login state', 
    authStartLogin:          '[auth] Start checking login state', 
    authLogin:               '[auth] Login', 
    authStartRegister:       '[auth] Start register', 
    authStartTokenRenew:     '[auth] Start token renew'

}