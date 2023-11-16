export default function Selector(id: string) {
  return document.querySelector(id)?.textContent;
}
