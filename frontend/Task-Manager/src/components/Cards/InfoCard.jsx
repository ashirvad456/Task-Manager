import React from 'react'

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className='flex items-center gap-2'>
      {/* Colored dot */}
      <div className={`w-2 h-2 md:w-2 md:h-2 ${color} rounded-full`} />

      {/* Value and Label in the same line */}
      <p className='text-xs md:text-sm text-gray-600'>
        <span className='text-black font-semibold mr-1'>{value}</span>
        {label}
      </p>
    </div>
  )
}

export default InfoCard