window.addEventListener('mousemove', () => highlightSuggested())
window.addEventListener('scroll', () => highlightSuggested())

function highlightSuggested() {
  const divs = document.getElementsByTagName("div")
  // @ts-ignore
  for (const e of divs) {
    const classList = e.classList.value
    if (classList.includes("sponsored_ad")) {
      e.remove()
    }
  }

  const spans = document.getElementsByTagName("span")
  // @ts-ignore
  for (const e of spans) {
    const text = e.innerText.toLowerCase()
    if (text.includes("sponsored") || text.includes("suggested for you")) {
      e.style.color = "red"
      e.style.border = "1px solid red"
    }
  }
}

/*
 * Ideas to block FB ads:
 * - find closest div to sponsored text that takes up a reasonable amount of space (vs. whole page)
 * -> use scrollHeight and scrollWidth
 * sponsored_ad in div class?
 */
