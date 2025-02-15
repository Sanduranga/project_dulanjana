'use client'

import React from 'react'
import { Typography } from '../typography'
import { IoChevronDownSharp, IoChevronForwardOutline } from 'react-icons/io5'

const FaqSection = () => {
  const data = {
    sectionHeader: "Got Questions? We've Got Answers!",
    faq: [
      {
        question: 'What is the purpose of this website?',
        answer:
          'This website is a platform for users to learn about the services we offer and to get in touch with us.',
      },
      {
        question: 'How do I get in touch with you?',
        answer: 'You can reach out to us via the contact form on the website or by sending us an email at',
      },
      {
        question: 'What is the purpose of this website?',
        answer:
          'This website is a platform for users to learn about the services we offer and to get in touch with us.',
      },
      {
        question: 'How do I get in touch with you?',
        answer: 'You can reach out to us via the contact form on the website or by sending us an email at',
      },
      {
        question: 'What is the purpose of this website?',
        answer:
          'This website is a platform for users to learn about the services we offer and to get in touch with us.',
      },
      {
        question: 'How do I get in touch with you?',
        answer: 'You can reach out to us via the contact form on the website or by sending us an email at',
      },
    ],
  }
  const [expandedIndex, setExpandedIndex] = React.useState<any>(null)

  const handleInteraction = (index: number, event: React.MouseEvent | React.KeyboardEvent) => {
    if (
      event.type === 'keydown' &&
      (event as React.KeyboardEvent).key !== 'Enter' &&
      (event as React.KeyboardEvent).key !== ' '
    ) {
      return
    }
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <>
      <div className="mt-14 md:mt-16 lg:mt-28 px-4 md:px-8 lg:px-24 xl:px-32 2xl:px-64">
        <div className="flex flex-col md:flex-row justify-normal md:gap-4 md:justify-between mb-8 lg:mb-20">
          <div className="flex flex-col gap-3 mb-4 md:mb-0">
            <Typography variant="h2" className="h3 font-bold text-gray-700">
              {data?.sectionHeader}
            </Typography>
          </div>
          {/* ************************* mobile screens view *************** */}
          <div className="md:hidden flex mt-3 mb-6 flex-col space-y-3">
            {data?.faq?.map((faq: { question: string; answer: string }, index: number) => (
              <div key={index}>
                <div
                  role="button"
                  tabIndex={0}
                  className="p-4 border rounded-lg hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                  onClick={(e) => handleInteraction(index, e)}
                  onKeyDown={(e) => handleInteraction(index, e)}>
                  <Typography>{faq.question}</Typography>
                  <span>{expandedIndex === index ? <IoChevronDownSharp /> : <IoChevronForwardOutline />}</span>
                </div>
                {expandedIndex === index && (
                  <div className="mt-2 p-4 border-l-2 border-primary-400">
                    <Typography>{faq.answer}</Typography>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* ************************* lg screens view *************** */}
        <div className="hidden md:flex flex-col md:space-y-3 lg:space-y-4">
          {data?.faq?.map((faq: { question: string; answer: string }, index: number) => (
            <div key={index}>
              <div
                role="button"
                tabIndex={0}
                className="p-4 border rounded-lg hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                onClick={(e) => handleInteraction(index, e)}
                onKeyDown={(e) => handleInteraction(index, e)}>
                <Typography className="font-[500]">{faq.question}</Typography>
                <span>{expandedIndex === index ? <IoChevronDownSharp /> : <IoChevronForwardOutline />}</span>
              </div>
              {expandedIndex === index && (
                <div className="mt-2 p-4 border-l-4 border-amber-400">
                  <Typography>{faq.answer}</Typography>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FaqSection
