'use client'

export default function ProjectsPage() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
            <svg className="w-28 h-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="56" rx="10" fill="white"/>
              <path d="M20.2819 26.7478C20.1304 26.5495 19.9068 26.4194 19.6599 26.386C19.4131 26.3527 19.1631 26.4188 18.9647 26.5703L10.6147 32.5703C10.4163 32.7218 10.2862 32.9454 10.2528 33.1922C10.2195 33.4391 10.2856 33.6891 10.4371 33.8875C10.5886 34.0859 10.8122 34.216 11.0591 34.2494C11.3059 34.2827 11.5559 34.2166 11.7543 34.0651L20.1043 28.0651C20.3027 27.9136 20.4328 27.69 20.4662 27.4432C20.4995 27.1963 20.4334 26.9463 20.2819 26.7478Z" fill="#1C274C"/>
              <path d="M23.3624 30.0055C23.2109 29.8071 22.9873 29.677 22.7404 29.6437C22.4936 29.6103 22.2436 29.6764 22.0452 29.8279L13.6952 35.8279C13.4968 35.9794 13.3667 36.203 13.3333 36.4499C13.3 36.6967 13.3661 36.9467 13.5176 37.1451C13.6691 37.3435 13.8927 37.4736 14.1396 37.507C14.3864 37.5403 14.6364 37.4742 14.8348 37.3227L23.1848 31.3227C23.3832 31.1712 23.5133 30.9476 23.5467 30.7008C23.58 30.4539 23.5139 30.2039 23.3624 30.0055Z" fill="#1C274C"/>
              <path d="M27.8396 34.3151L19.4896 40.3151C19.2912 40.4666 19.1611 40.6902 19.1277 40.937C19.0944 41.1839 19.1605 41.4339 19.312 41.6323C19.4635 41.8307 19.6871 41.9608 19.934 41.9942C20.1808 42.0275 20.4308 41.9614 20.6292 41.8099L28.9792 35.8099C29.1776 35.6584 29.3077 35.4348 29.3411 35.188C29.3744 34.9411 29.3083 34.6911 29.1568 34.4927C29.0053 34.2943 28.7817 34.1642 28.5348 34.1308C28.288 34.0975 28.038 34.1636 27.8396 34.3151Z" fill="#1C274C"/>
              <path d="M34.1375 26.5703C33.9391 26.4188 33.6891 26.3527 33.4423 26.386C33.1954 26.4194 32.9718 26.5495 32.8203 26.7478C32.6688 26.9463 32.6027 27.1963 32.636 27.4432C32.6694 27.69 32.7995 27.9136 32.9979 28.0651L41.3479 34.0651C41.5463 34.2166 41.7963 34.2827 42.0431 34.2494C42.29 34.216 42.5136 34.0859 42.6651 33.8875C42.8166 33.6891 42.8827 33.4391 42.8494 33.1922C42.816 32.9454 42.6859 32.7218 42.4875 32.5703L34.1375 26.5703Z" fill="#1C274C"/>
              <path d="M41.2651 35.8279L32.9151 29.8279C32.7167 29.6764 32.4667 29.6103 32.2199 29.6437C31.973 29.677 31.7494 29.8071 31.5979 30.0055C31.4464 30.2039 31.3803 30.4539 31.4136 30.7008C31.447 30.9476 31.5771 31.1712 31.7755 31.3227L40.1255 37.3227C40.3239 37.4742 40.5739 37.5403 40.8207 37.507C41.0676 37.4736 41.2912 37.3435 41.4427 37.1451C41.5942 36.9467 41.6603 36.6967 41.627 36.4499C41.5936 36.203 41.4635 35.9794 41.2651 35.8279Z" fill="#1C274C"/>
              <path d="M37.1926 40.3151L28.8426 34.3151C28.6442 34.1636 28.3942 34.0975 28.1474 34.1308C27.9005 34.1642 27.6769 34.2943 27.5254 34.4927C27.3739 34.6911 27.3078 34.9411 27.3411 35.188C27.3745 35.4348 27.5046 35.6584 27.703 35.8099L36.053 41.8099C36.2514 41.9614 36.5014 42.0275 36.7482 41.9942C36.9951 41.9608 37.2187 41.8307 37.3702 41.6323C37.5217 41.4339 37.5878 41.1839 37.5545 40.937C37.5211 40.6902 37.391 40.4666 37.1926 40.3151Z" fill="#1C274C"/>
              <path d="M26.5 23C25.1193 23 24 21.8807 24 20.5C24 19.1193 25.1193 18 26.5 18C27.8807 18 29 19.1193 29 20.5C29 21.8807 27.8807 23 26.5 23Z" fill="#1C274C"/>
            </svg>
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
              Projet 1
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
              Description du projet
            </h3>
            <p className="mt-3 text-gray-500">
              Un projet innovant utilisant les dernières technologies web.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Voir le projet
            </a>
          </div>
        </div>
        {/* End Card */}

        {/* Card */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="h-52 flex flex-col justify-center items-center bg-rose-500 rounded-t-xl">
            <svg className="w-28 h-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="56" rx="10" fill="white"/>
              <path d="M20.2819 26.7478C20.1304 26.5495 19.9068 26.4194 19.6599 26.386C19.4131 26.3527 19.1631 26.4188 18.9647 26.5703L10.6147 32.5703C10.4163 32.7218 10.2862 32.9454 10.2528 33.1922C10.2195 33.4391 10.2856 33.6891 10.4371 33.8875C10.5886 34.0859 10.8122 34.216 11.0591 34.2494C11.3059 34.2827 11.5559 34.2166 11.7543 34.0651L20.1043 28.0651C20.3027 27.9136 20.4328 27.69 20.4662 27.4432C20.4995 27.1963 20.4334 26.9463 20.2819 26.7478Z" fill="#1C274C"/>
              <path d="M23.3624 30.0055C23.2109 29.8071 22.9873 29.677 22.7404 29.6437C22.4936 29.6103 22.2436 29.6764 22.0452 29.8279L13.6952 35.8279C13.4968 35.9794 13.3667 36.203 13.3333 36.4499C13.3 36.6967 13.3661 36.9467 13.5176 37.1451C13.6691 37.3435 13.8927 37.4736 14.1396 37.507C14.3864 37.5403 14.6364 37.4742 14.8348 37.3227L23.1848 31.3227C23.3832 31.1712 23.5133 30.9476 23.5467 30.7008C23.58 30.4539 23.5139 30.2039 23.3624 30.0055Z" fill="#1C274C"/>
            </svg>
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500">
              Projet 2
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
              Un autre projet
            </h3>
            <p className="mt-3 text-gray-500">
              Une expérience utilisateur unique et innovante.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Voir le projet
            </a>
          </div>
        </div>
        {/* End Card */}

        {/* Card */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
            <svg className="w-28 h-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="56" rx="10" fill="white"/>
              <path d="M27.8396 34.3151L19.4896 40.3151C19.2912 40.4666 19.1611 40.6902 19.1277 40.937C19.0944 41.1839 19.1605 41.4339 19.312 41.6323C19.4635 41.8307 19.6871 41.9608 19.934 41.9942C20.1808 42.0275 20.4308 41.9614 20.6292 41.8099L28.9792 35.8099C29.1776 35.6584 29.3077 35.4348 29.3411 35.188C29.3744 34.9411 29.3083 34.6911 29.1568 34.4927C29.0053 34.2943 28.7817 34.1642 28.5348 34.1308C28.288 34.0975 28.038 34.1636 27.8396 34.3151Z" fill="#1C274C"/>
            </svg>
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
              Projet 3
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
              Projet innovant
            </h3>
            <p className="mt-3 text-gray-500">
              Une solution moderne pour des besoins modernes.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Voir le projet
            </a>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Grid */}
    </div>
  )
}
