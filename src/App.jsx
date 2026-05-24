import { useState } from 'react';
import CalendarView from './components/CalendarView';
import DocumentChamber from './components/DocumentChamber';
import VideoCall from './components/VideoCall';
import Payment from './components/Payment';
import Security from './components/Security';

function App() {
  const [tab, setTab] = useState('calendar');

  return (
    <div>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '10px', padding: '20px', background: '#4f46e5', flexWrap: 'wrap' }}>
        <button onClick={() => setTab('calendar')} style={{ padding: '10px 20px', background: tab === 'calendar' ? 'white' : '#6366f1', color: tab === 'calendar' ? '#4f46e5' : 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          📅 Calendar
        </button>
        <button onClick={() => setTab('documents')} style={{ padding: '10px 20px', background: tab === 'documents' ? 'white' : '#6366f1', color: tab === 'documents' ? '#4f46e5' : 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          📄 Documents
        </button>
        <button onClick={() => setTab('video')} style={{ padding: '10px 20px', background: tab === 'video' ? 'white' : '#6366f1', color: tab === 'video' ? '#4f46e5' : 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          🎥 Video Call
        </button>
        <button onClick={() => setTab('payment')} style={{ padding: '10px 20px', background: tab === 'payment' ? 'white' : '#6366f1', color: tab === 'payment' ? '#4f46e5' : 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          💳 Payment
        </button>
        <button onClick={() => setTab('security')} style={{ padding: '10px 20px', background: tab === 'security' ? 'white' : '#6366f1', color: tab === 'security' ? '#4f46e5' : 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          🔐 Security
        </button>
      </div>

      {/* Content */}
      {tab === 'calendar' && <CalendarView />}
      {tab === 'documents' && <DocumentChamber />}
      {tab === 'video' && <VideoCall />}
      {tab === 'payment' && <Payment />}
      {tab === 'security' && <Security />}
    </div>
  );
}

export default App;