'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic with Strapi
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Contactez-nous
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Nous sommes là pour vous aider et répondre à vos questions
          </p>
        </div>

        <div className="mt-12">
          {/* Card */}
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
              Envoyez-nous un message
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 lg:gap-6">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Nom</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* End Grid */}

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    required
                    value={formData.message}
                    onChange={handleChange}></textarea>
                </div>
              </div>
              {/* End Grid */}

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
      </div>
    </div>
  )
}
