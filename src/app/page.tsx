import FaqSection from './components/landing-page/faq-section'
import Header from './components/landing-page/header'
import Testimonial from './components/landing-page/testimonial-section'
import CategoryList from './shared/components/category-list'

export default function Home() {
  return (
    <div className="">
      <Header />
      <CategoryList />
      <FaqSection />
      <Testimonial />
    </div>
  )
}
