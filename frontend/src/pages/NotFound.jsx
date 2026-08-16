import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'
import SEOHead from '../components/ui/SEOHead'

export default function NotFound() {
  return (
    <>
      <SEOHead title="404 — Page Not Found" noindex />

      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-8xl md:text-9xl font-bold text-emerald-200 select-none">404</p>
          <h1 className="text-3xl font-bold text-white mt-4">Page Not Found</h1>
          <p className="text-neutral-400 mt-3 max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button as={Link} to="/" className="mt-8">
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </div>
      </section>
    </>
  )
}