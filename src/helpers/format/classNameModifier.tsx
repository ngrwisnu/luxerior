export function addClass(e: any, classes: any) {
  e.classList && e.classList.add(...classes.split(" "));
}

export function removeClass(e: any, classes: any) {
  e.classList && e.classList.remove(...classes.split(" "));
}
