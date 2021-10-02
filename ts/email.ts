window.addEventListener('mousemove', () => modifyLinks())

const urlRegex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/

function isLinkSketchy(link: HTMLAnchorElement): boolean {
  const textHost = getHost(link.text) 
  const hrefHost = getHost(link.href)
  if (textHost != hrefHost) {
    return true
  }
  return false 
}

function getHost(href: string): string {
  return Object.assign(document.createElement('a'), { href }).host
}


function shouldIgnoreLink(link: HTMLAnchorElement): boolean {
  if (link.href.includes(".google.com") && !link.href.includes(".docs.google.com")) {
    return true 
  }
  if (link.text === "") {
    return true
  }
  console.log(link.text, link.href)
  console.log(link.closest('div[g_editable="true"]'))
  if (link.closest('div[g_editable="true"]') !== null) {
    return true
  }
  return false 
}

function modifyLinks() {
  const elements = document.getElementsByTagName("a")
  console.log('beginning to highlight sketchy links')
  // @ts-ignore
  for (const e of elements) {

    if (shouldIgnoreLink(e)) continue

    const href = e.href

    let text = e.text
    const storedText = e.getAttribute("ogText");
    if (storedText === null) {
      e.setAttribute("ogText", text)
    } else {
      text = storedText
    }

    // TODO: add some sort of uniformization of links so silly link rewriting doesn't happen
    // example, https://google.com doesn't need to be rewritten to google.com.
    e.addEventListener('mouseover', function() {
      e.text = href
    })
    e.addEventListener('mouseleave', function() {
      e.text = text
    })

    if (urlRegex.test(text) && isLinkSketchy(e)) {
      e.style.border = "1px solid red"
      e.style.color = "red"
    }
  }
}

// Desired functionality
// 1. highlight "sketchy" links (points to somewhere else) [done]
// 1a. show where hyperlinked text resolves to [done]
// 2. Notify if the sender is not from your org
// 3. highlight known malicious sites
// 4. don't highlight links in composer [done]
