import { useEffect } from 'react'

const IFRAME_ID = 'inline-cGyO0nt09Z8sQ1ceJ7aC'

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
      src="https://app.treeservicesclarence.com/widget/form/cGyO0nt09Z8sQ1ceJ7aC"
      style={{ width: '100%', minHeight: '1250px', border: 'none', borderRadius: '4px', display: 'block' }}
      id={IFRAME_ID}
      scrolling="no"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Option In Form Website"
      data-height="undefined"
      data-layout-iframe-id={IFRAME_ID}
      data-form-id="cGyO0nt09Z8sQ1ceJ7aC"
      title="Option In Form Website"
    />
  );
}
