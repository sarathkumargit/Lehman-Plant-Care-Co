import { useEffect } from 'react'

const IFRAME_ID = 'inline-PdF4Aecu5CcvVWhGDaOz'

export default function GHLOptInForm() {
  useEffect(() => {
    function handleResize(event) {
      if (!event.origin || !event.origin.includes('treeservicesclarence.com')) return
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