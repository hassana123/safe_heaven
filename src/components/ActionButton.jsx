import React from 'react'

const ActionButton = ({ icon, label }) => {
  return (
    <button className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition duration-200">
    <div className="text-custom-blue mb-2">{icon}</div>
    <span className="text-xs text-center">{label}</span>
  </button>
  )
}

export default ActionButton
