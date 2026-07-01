import React from 'react'

const fallbackIntern = {
  company: 'Allied Software Engineers',
  name: 'Haroon Rasheed',
  domain: 'MERN Stack Web Development',
  period: '2 Months',
  supervisor: 'Muhammad Ahsan Ali',
}

const InternCard = ({ intern, tasks = [] }) => {
  const internData = intern || fallbackIntern

  return (
    <section className='rounded-2xl border border-[#31454b] bg-[#14252C] font-bold text-[#E6CAB3] shadow-xl'>
      <div className='px-4 pt-5 sm:px-6 sm:pt-6'>
        <h1 className='text-xl font-bold sm:text-2xl'>My Internship Details</h1>
      </div>

      <hr className='mx-4 mt-4 border-t border-[#395158] sm:mx-6' />

      <div className='grid gap-6 px-4 py-5 sm:grid-cols-[180px_1fr] sm:items-start sm:px-6'>
        <div className='mx-auto w-full max-w-[190px] overflow-hidden rounded-xl border border-[#3c5960] bg-[#23363c] p-2'>
          <img src='pp1.png' alt='Intern profile' className='h-44 w-full rounded-lg object-cover sm:h-48' />
        </div>

        <div className='grid gap-3 text-sm sm:grid-cols-2 sm:gap-4 sm:text-base'>
          <p className='rounded-lg bg-[#20353b] p-3'>Company Name: <span className='font-normal'>{internData.company}</span></p>
          <p className='rounded-lg bg-[#20353b] p-3'>Intern Name: <span className='font-normal'>{internData.name}</span></p>
          <p className='rounded-lg bg-[#20353b] p-3'>Internship Domain: <span className='font-normal'>{internData.domain}</span></p>
          <p className='rounded-lg bg-[#20353b] p-3'>Internship Period: <span className='font-normal'>{internData.period}</span></p>
          <p className='rounded-lg bg-[#20353b] p-3 sm:col-span-2'>Supervisor Name: <span className='font-normal'>{internData.supervisor}</span></p>
        </div>
      </div>

      <hr className='mx-4 border-t border-[#395158] sm:mx-6' />

      <div className='space-y-4 px-4 py-5 sm:px-6 sm:py-6'>
        <div>
          <h1 className='text-lg font-bold sm:text-xl'>My Internship Tasks</h1>
        </div>

        <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
          {tasks.length > 0 ? tasks.map((task, index) => (
            <div key={task.id || index} className='rounded-xl border border-[#395158] bg-[#273C41] p-4 shadow-lg'>
              <h2 className='text-sm font-bold sm:text-base'>Task {index + 1}: <span className='font-normal'>{task.title}</span></h2>
              <p className='mt-2 text-xs font-normal text-[#ccb39b] sm:text-sm'>Status: {task.status}</p>
            </div>
          )) : (
            <p className='rounded-xl border border-[#395158] bg-[#273C41] p-4 text-sm font-normal'>No tasks available.</p>
          )}
        </div>

        <div className='flex justify-center pt-1 sm:justify-end'>
          <button className='rounded-lg bg-[#E6CAB3] px-4 py-2 text-xs font-bold text-[#14252C] transition hover:bg-[#D4B996] sm:text-sm'>
            View Details
          </button>
        </div>
      </div>
    </section>
  )
}

export default InternCard
