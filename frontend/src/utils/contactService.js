const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || ''

export async function submitContactForm(data) {
  if (!FORM_ENDPOINT) {
    // Dev fallback — log and simulate success
    console.log('Form submission (dev):', data)
    await new Promise((r) => setTimeout(r, 1000))
    return { success: true }
  }

  const res = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })

  if (!res.ok) throw new Error('Submission failed')
  return res.json()
}