import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import FormField from './FormField'
import FormSelect from './FormSelect'
import Button from '../ui/Button'
import { submitContactForm } from '../../utils/contactService'

const serviceOptions = [
  { value: 'web-design', label: 'Web Design' },
  { value: 'web-development', label: 'Web Development' },
  { value: 'ecommerce', label: 'E-Commerce' },
  { value: 'seo', label: 'SEO & Marketing' },
  { value: 'branding', label: 'Branding' },
  { value: 'other', label: 'Other' },
]

const initialState = { name: '', email: '', service: '', budget: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await submitContactForm(form)
      setSuccess(true)
      setForm(initialState)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-16">
        <CheckCircle size={56} className="text-amber-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
        <p className="text-neutral-400 mt-2">We'll get back to you within 24 hours.</p>
        <button onClick={() => setSuccess(false)} className="mt-6 text-amber-400 hover:underline text-sm">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField label="Your Name" name="name" placeholder="John Smith" value={form.name} onChange={handleChange} required />
        <FormField label="Email Address" name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <FormSelect label="Service Needed" name="service" options={serviceOptions} value={form.service} onChange={handleChange} required />
        <FormField label="Budget Range" name="budget" placeholder="e.g. $2,000 – $5,000" value={form.budget} onChange={handleChange} />
      </div>
      <FormField label="Message" name="message" placeholder="Tell us about your project..." value={form.message} onChange={handleChange} rows={5} required />
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <Button type="submit" loading={loading} size="lg" className="w-full">
        <Send size={16} />
        Send Message
      </Button>
    </form>
  )
}