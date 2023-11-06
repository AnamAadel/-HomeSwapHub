
import InputBox from '../common/InputBox'
import TextArea from '../common/TextArea'
import LocationMap from './LocationMap'

function Contact() {
    return (
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="max-w-2xl lg:max-w-5xl mx-auto">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
        Contact us
      </h1>
      <p className="mt-1 text-gray-600 dark:text-gray-400">
        We had love to talk about how we can help you.
      </p>
    </div>

    <div className="mt-12 grid items-center md:grid-cols-2 gap-6 lg:gap-16">
      <div className="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700 border-2 border-[#24292F]">
        <h2 className="mb-8 text-3xl font-semibold text-gray-800 dark:text-gray-200">
        Let's talk!
        </h2>

        <htmlForm>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputBox name="First Name" />
              <InputBox name="Last Name" />

            </div>

              <InputBox name="Email" type="email" />
              <InputBox name="Phone Number" type="number" />

            <TextArea />
          </div>

          <div className="mt-4 grid">
            <button type="submit" className="text-white w-full justify-center bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 transition py-3 px-4 dark:focus:ring-offset-gray-800">Send inquiry</button>
          </div>

          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500"> We will get back to you in 1-2 business days.</p>
          </div>
        </htmlForm>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-800 h-full border-2">
        <LocationMap />
        
      </div>
    </div>
  </div>
</div>
  )
}

export default Contact