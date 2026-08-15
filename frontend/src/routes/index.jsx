import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import RootLayout from '../components/layout/RootLayout'
import Home from '../pages/Home'

// Everything except the homepage is code-split so the initial JS bundle
// only has to include what's needed to render "/". Lighthouse was flagging
// ~45 KiB of unused JS on the main bundle because About/Services/Projects/
// Contact/legal pages were all being eagerly bundled together regardless
// of which route the visitor actually landed on.
const About = lazy(() => import('../pages/About'))
const Services = lazy(() => import('../pages/Services'))
const Projects = lazy(() => import('../pages/Projects'))
const Contact = lazy(() => import('../pages/Contact'))
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'))
const TermsConditions = lazy(() => import('../pages/TermsConditions'))
const NotFound = lazy(() => import('../pages/NotFound'))

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
