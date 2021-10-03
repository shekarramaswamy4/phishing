window.addEventListener('mousemove', () => highlightSuggested())
window.addEventListener('scroll', () => highlightSuggested())

function highlightSuggested() {
  const elements = document.getElementsByTagName("span")

  // @ts-ignore
  for (const e of elements) {
    const text = e.innerText.toLowerCase()
    if (text.includes("sponsored") || text.includes("suggested for you")) {
      e.style.color = "red"
      e.style.border = "1px solid red"
    }
  }
}
