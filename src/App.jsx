import FeedbackForm from './components/FeedbackForm'
import FeedbackMob from './components/FeedbackMob'

function App() {

  return (
    <>
     <section className='bg-[#FFFFFF] h-screen w-screen hidden lg:flex '>
<FeedbackForm/>
     </section>
     <section className='lg:hidden '>
      <FeedbackMob/>
     </section>
    </>
  )
}

export default App
