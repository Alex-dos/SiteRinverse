export default function AboutPage() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Notre Histoire</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Découvrez qui nous sommes et ce qui nous motive.</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
              <svg className="flex-shrink-0 w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Notre Mission</h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">Créer des expériences digitales uniques et innovantes pour nos clients.</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
              <svg className="flex-shrink-0 w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Nos Valeurs</h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">Innovation, qualité et satisfaction client sont au cœur de notre approche.</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-8 text-center">Notre Équipe</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <img className="rounded-full w-24 h-24 mx-auto mb-2" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
              <div className="mt-2">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">David Miller</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fondateur & CEO</p>
              </div>
            </div>

            <div className="text-center">
              <img className="rounded-full w-24 h-24 mx-auto mb-2" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
              <div className="mt-2">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">Sophie Moore</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Directrice Design</p>
              </div>
            </div>

            <div className="text-center">
              <img className="rounded-full w-24 h-24 mx-auto mb-2" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
              <div className="mt-2">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">Matt Cavallaro</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
