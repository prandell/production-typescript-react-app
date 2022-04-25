// This is a mock function to emulate making an async request for discount codes.
// It just returns the legnth of the product name as a discount
export function fetchDiscounts(productName: string) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: productName.length }), 500)
  )
}
