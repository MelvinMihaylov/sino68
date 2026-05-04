const NAVIGATION_SCROLL_OFFSET = 112
const HASH_SCROLL_WAIT_MS = 180
const HASH_SCROLL_RETRY_DELAY = 40
const HASH_SCROLL_MAX_ATTEMPTS = 12

const waitForScrollTarget = (duration) =>
  new Promise((resolve) => window.setTimeout(resolve, duration))

export async function getHashScrollPosition(hash) {
  for (let attempt = 0; attempt < HASH_SCROLL_MAX_ATTEMPTS; attempt += 1) {
    const target = document.querySelector(hash)

    if (target) {
      const targetTop = target.getBoundingClientRect().top + window.scrollY - NAVIGATION_SCROLL_OFFSET

      return {
        left: 0,
        top: Math.max(targetTop, 0),
        behavior: 'smooth'
      }
    }

    await waitForScrollTarget(attempt === 0 ? HASH_SCROLL_WAIT_MS : HASH_SCROLL_RETRY_DELAY)
  }

  return {
    left: 0,
    top: 0
  }
}

export async function scrollToHashTarget(hash) {
  const position = await getHashScrollPosition(hash)

  window.scrollTo(position)
}
