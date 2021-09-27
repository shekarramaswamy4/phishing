window.addEventListener('hashchange', () => highlightSketchyLinks())

function isLinkSketchy(link: HTMLAnchorElement): boolean {
  return true
}

function highlightSketchyLinks() {
  const elements = document.getElementsByTagName("a")
  console.log('beginning to highlight sketchy links')
  // @ts-ignore
  for (const e of elements) {
    if (isLinkSketchy(e)) {
      // highlight a tag
    }
  }
}

// Desired functionality
// 1. highlight "sketchy" links (points to somewhere else)
// 1a. potentially show where hyperlinked text resolves to
// 2. Notify if the sender is not from your org
// 3. highlight known malicious sites
