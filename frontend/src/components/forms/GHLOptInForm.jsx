import { useEffect } from 'react'

const IFRAME_ID = 'inline-PdF4Aecu5CcvVWhGDaOz'
const FORM_EMBED_SCRIPT_SRC = 'https://app.treeservicesclarence.com/js/form_embed.js'
// Origins the widget may postMessage from. The iframe itself is served
// from link.kdlead.com, but the loader script below lives on
// treeservicesclarence.com and both have been seen posting resize
// events, so both are accepted.
const ALLOWED_MESSAGE_ORIGINS = ['kdlead.com', 'treeservicesclarence.com']

export default function GHLOptInForm() {
  // Load the GHL form-embed loader script only when this form actually
  // mounts (i.e. only on /contact, and only once the caller has scrolled
  // it into view — see Contact.jsx), instead of sitewide from index.html.
  useEffect(() => {
    if (document.querySelector(`script[src="${FORM_EMBED_SCRIPT_SRC}"]`)) return
    const script = document.createElement('script')
    script.src = FORM_EMBED_SCRIPT_SRC
    script.async = true
    document.body.appendChild(script)
  }, [])

  useEffect(() => {
    function handleResize(event) {
      if (!event.origin || !ALLOWED_MESSAGE_ORIGINS.some((o) => event.origin.includes(o))) return
      const data = event.data
      const height =
        (typeof data === 'object' && data !== null && (data.height || data?.data?.height)) || null
      if (!height) return
      const iframe = document.getElementById(IFRAME_ID)
      if (iframe) {
        iframe.style.height = `${height}px`
      }
    }
    window.addEventListener('message', handleResize)
    return () => window.removeEventListener('message', handleResize)
  }, [])

  return (
    <iframe
      src="https://link.kdlead.com/widget/form/PdF4Aecu5CcvVWhGDaOz"
      style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
      id={IFRAME_ID}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Lehman Plant Care Co"
      data-height="819"
      data-layout-iframe-id={IFRAME_ID}
      data-form-id="PdF4Aecu5CcvVWhGDaOz"
      title="Lehman Plant Care Co"
    />
  )
}