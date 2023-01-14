export function numberFormatter(price: number) {
  return new Intl.NumberFormat("id-ID").format(price);
}
