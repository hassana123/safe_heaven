import React from 'react'
import ActionButton from './ActionButton';
const ActionGrid = () => {
    const actions = [
        { icon: '📝', label: 'Report an Incident' },
        { icon: '🧘', label: 'Self-Therapy' },
        { icon: '📢', label: 'Share Your Story' },
        { icon: '📚', label: 'Support & Education' },
        { icon: '🤝', label: 'Consult an Activist or Therapist' },
        { icon: '🔒', label: 'Share Your Story Anonymously' },
      ];
  return (
    <div className="grid grid-cols-3 gap-4 px-5">
    {actions.map((action, index) => (
      <ActionButton key={index} icon={action.icon} label={action.label} />
    ))}
  </div>
  )
}

export default ActionGrid
