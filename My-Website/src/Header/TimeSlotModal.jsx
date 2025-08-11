import React, { useEffect, useState } from 'react';
import './timeSlotmodal.css';

const TimeSlotModal = ({ onClose, onSelectSlot }) => {
  const [disabledSlots, setDisabledSlots] = useState([]);


const slotDefinitions = [
  { label: 'Today 90 min', startHour: null },     // Immediate delivery

  { label: '6 AM - 8 AM', startHour: 6 },
  { label: '8 AM - 10 AM', startHour: 8 },
  { label: '10 AM - 12 PM', startHour: 10 },
  { label: '12 PM - 2 PM', startHour: 12 },
  { label: '2 PM - 4 PM', startHour: 14 },
  { label: '3 PM - 5 PM', startHour: 15 },
  { label: '5 PM - 7 PM', startHour: 17 },
  { label: '7 PM - 9 PM', startHour: 19 },
  { label: '8 PM - 10 PM', startHour: 20 }
];
  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();

    const disabled = slotDefinitions.map(slot => {
      if (slot.startHour === null) return false; // "Today 90 min" always enabled
      return slot.startHour <= currentHour;
    });

    setDisabledSlots(disabled);
  }, []);

  return (
    <div className="timeslot-overlay">
      <div className="timeslot-modal">
        <h2 className="modal-title">Select slot for Shipment 1 of 1</h2>

        {/* Date Tabs */}
        <div className="date-tabs">
          <button className="tab active">
            Today {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
          </button>
          {[...Array(7)].map((_, i) => {
            const date = new Date();
            date.setDate(date.getDate() + i + 1);
            return (
              <button key={i} className="tab" disabled>
                {date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
              </button>
            );
          })}
        </div>

        {/* Time Slots */}
        <div className="slots-grid">
          {slotDefinitions.map((slot, index) => (
            <button
              key={index}
              className={`slot-button ${disabledSlots[index] ? 'disabled' : ''}`}
              disabled={disabledSlots[index]}
              onClick={() => !disabledSlots[index] && onSelectSlot(slot.label)}
            >
              {slot.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>CANCEL</button>
          <button className="proceed-btn" onClick={onClose}>SELECT & PROCEED</button>
        </div>
      </div>
    </div>
  );
};

export default TimeSlotModal;
