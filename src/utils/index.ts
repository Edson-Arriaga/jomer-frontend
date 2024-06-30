export function formatPrice(price: number) {
    return Intl.NumberFormat('mxn', {
        style: 'currency',
        currency: 'MXN'
    }).format(price)
}