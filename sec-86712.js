if (new URLSearchParams(window.location.search).get('xss') === 'true') {
    alert(`SEC-86712 xss on ${document.domain}`)
}
