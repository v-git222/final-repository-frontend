import React, { useState } from 'react';
import {
  FiSend,
  FiSearch,
  FiPhone,
  FiVideo,
  FiInfo,
  FiMail,
  FiExternalLink,
  FiEdit3,
  FiDollarSign,
  FiTarget,
  FiGlobe,
} from 'react-icons/fi';


import { HiOutlineDotsHorizontal } from 'react-icons/hi';

export default function MessageComponent({ dark = false, style = {} }) {
  const [messages, setMessages] = useState([
    { from: 'Sarah Johnson', text: 'Hi! I reviewed your pitch deck and I am impressed with your traction.', time: '10:15 AM' },
    { from: 'You', text: 'Thank you! We are excited about the opportunity to discuss further.', time: '10:20 AM' },
    { from: 'Sarah Johnson', text: 'I would love to schedule a call to discuss your metrics in more detail.', time: '10:30 AM' },
  ]);

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = {
      from: 'You',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMsg]);
    setInput('');
  };

  // Container
  const containerStyle = {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Inter, sans-serif',
    backgroundColor: dark ? '#0f0f0f' : '#f9fafb',
    color: dark ? '#f9fafb' : '#111827',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    ...style,
  };

  // Sidebar
  const sidebarStyle = {
    width: '25%',
    background: dark ? '#181818' : '#fff',
    borderRight: dark ? '1px solid #333' : '1px solid #e5e7eb',
    display: 'flex',
    flexDirection: 'column',
  };

  const searchBarStyle = {
    display: 'flex',
    alignItems: 'center',
    background: dark ? '#1f2937' : '#f3f4f6',
    margin: '1rem',
    borderRadius: '8px',
    padding: '0.5rem 1rem',
  };

  const inputStyle = {
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: dark ? '#f9fafb' : '#111827',
    flex: 1,
    fontSize: '0.9rem',
  };

  // Chat Section
  const chatSectionStyle = {
    width: '50%',
    background: dark ? '#111' : '#fff',
    display: 'flex',
    flexDirection: 'column',
  };

  const chatHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    borderBottom: dark ? '1px solid #333' : '1px solid #e5e7eb',
  };

  const chatMessagesStyle = {
    flex: 1,
    padding: '1rem 2rem',
    overflowY: 'auto',
    background: dark ? '#0f0f0f' : '#f9fafb',
  };

  const chatInputStyle = {
    display: 'flex',
    padding: '1rem',
    borderTop: dark ? '1px solid #333' : '1px solid #e5e7eb',
    background: dark ? '#181818' : '#fff',
  };

  const chatInputFieldStyle = {
    flex: 1,
    border: dark ? '1px solid #333' : '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '0.5rem 1rem',
    outline: 'none',
    fontSize: '0.9rem',
    background: dark ? '#0f0f0f' : '#f9fafb',
    color: dark ? '#f9fafb' : '#111827',
  };

  const sendButtonStyle = {
    marginLeft: '0.5rem',
    background: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.5rem 0.75rem',
    cursor: 'pointer',
  };

  // Profile Sidebar
  const profileSidebarStyle = {
    width: '25%',
    background: dark ? '#181818' : '#fff',
    borderLeft: dark ? '1px solid #333' : '1px solid #e5e7eb',
    padding: '1.5rem',
    overflowY: 'auto',
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={searchBarStyle}>
          <FiSearch style={{ color: dark ? '#9ca3af' : '#6b7280', marginRight: '8px' }} />
          <input type="text" placeholder="Search..." style={inputStyle} />
        </div>

        <div style={{ padding: '1rem' }}>
          <h4 style={{ color: dark ? '#9ca3af' : '#6b7280', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '0.5rem' }}>Recent</h4>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: dark ? '#1e3a8a' : '#e0f2fe',
              borderRadius: '12px',
              padding: '0.75rem',
              cursor: 'pointer',
            }}
          >
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sarah Johnson"
              style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '0.75rem' }}
            />
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>Sarah Johnson</p>
              <p style={{ fontSize: '0.8rem', color: dark ? '#d1d5db' : '#6b7280' }}>Growth Equity Fund</p>
              <p style={{ fontSize: '0.75rem', color: dark ? '#9ca3af' : '#9ca3af' }}>Thanks for sharing the upd...</p>
            </div>
            <span style={{ fontSize: '0.7rem', color: dark ? '#9ca3af' : '#9ca3af' }}>Today</span>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div style={chatSectionStyle}>
        <div style={chatHeaderStyle}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sarah Johnson"
              style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '0.75rem' }}
            />
            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 600 }}>Sarah Johnson</h3>
              <p style={{ fontSize: '0.75rem', color: dark ? '#9ca3af' : '#6b7280' }}>Venture Capital Partners</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', color: dark ? '#9ca3af' : '#6b7280', cursor: 'pointer' }}>
            <FiPhone />
            <FiVideo />
            <FiInfo />
          </div>
        </div>

        <div style={chatMessagesStyle}>
          {messages.map((msg, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: msg.from === 'You' ? 'flex-end' : 'flex-start' }}>
              <div
                style={{
                  maxWidth: '60%',
                  padding: '0.75rem 1rem',
                  borderRadius: '16px',
                  fontSize: '0.9rem',
                  background: msg.from === 'You' ? '#2563eb' : dark ? '#1f2937' : '#f3f4f6',
                  color: msg.from === 'You' ? '#fff' : dark ? '#e5e7eb' : '#111827',
                  borderBottomRightRadius: msg.from === 'You' ? '0' : '16px',
                  borderBottomLeftRadius: msg.from !== 'You' ? '0' : '16px',
                  marginBottom: '1rem',
                }}
              >
                {msg.text}
                <div style={{ fontSize: '0.7rem', marginTop: '0.25rem', textAlign: 'right', color: dark ? '#9ca3af' : '#9ca3af' }}>{msg.time}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={chatInputStyle}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            style={chatInputFieldStyle}
          />
          <button onClick={handleSend} style={sendButtonStyle}>
            <FiSend />
          </button>
        </div>
      </div>

      {/* Profile Sidebar */}
<div
  style={{
   
    background: dark ? "#181a1f" : "#f9fafb",
    borderLeft: dark ? "1px solid #2a2a2a" : "1px solid #e5e7eb",
    padding: "2rem 1.5rem",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width:"23rem"
  }}
>
  {/* Founder Contact Card */}
  <div
    style={{
      background: dark ? "#111315" : "#ffffff",
      borderRadius: "16px",
      padding: "2rem 1.5rem",
      boxShadow: dark
        ? "0 2px 8px rgba(0,0,0,0.5)"
        : "0 4px 16px rgba(0,0,0,0.05)",
      transition: "0.3s ease",
    }}
  >
    <h3
      style={{
        fontSize: "1rem",
        fontWeight: 600,
        color: dark ? "#f3f4f6" : "#111827",
        marginBottom: "1.5rem",
        overflowY:"none"
      }}
    >
      Founder Contact
    </h3>

    {/* Profile Image and Name */}
    <div style={{ textAlign: "center" }}>
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Sarah Johnson"
        style={{
          width: "96px",
          height: "96px",
          borderRadius: "50%",
          marginBottom: "1rem",
          objectFit: "cover",
          boxShadow: dark
            ? "0 0 6px rgba(255,255,255,0.1)"
            : "0 0 6px rgba(0,0,0,0.1)",
        }}
      />
      <h4
        style={{
          fontWeight: 600,
          fontSize: "1.1rem",
          color: dark ? "#f9fafb" : "#111827",
        }}
      >
        Sarah Johnson
      </h4>
    </div>

    {/* Contact Icons */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "1.5rem",
      }}
    >
      {[FiEdit3, FiMail, FiPhone, FiExternalLink, HiOutlineDotsHorizontal].map(
        (Icon, i) => (
          <div
            key={i}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: dark ? "#1f2937" : "#f3f4f6",
              color: dark ? "#d1d5db" : "#4b5563",
              cursor: "pointer",
              transition: "0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = dark ? "#2563eb" : "#e0f2fe")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = dark
                ? "#1f2937"
                : "#f3f4f6")
            }
          >
            <Icon size={18} />
          </div>
        )
      )}
    </div>

    {/* Details Section */}
    <div
      style={{
        marginTop: "2rem",
        fontSize: "0.9rem",
        lineHeight: "1.6",
      }}
    >
      {[
        { label: "Gender", value: "Female" },
        { label: "Contact", value: "+1-555-123-4567" },
        {
          label: "Email ID",
          value: (
            <a
              href="mailto:sarahjohnson@mail.com"
              style={{
                color: "#2563eb",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              sarahjohnson@mail.com
            </a>
          ),
        },
        {
          label: "Address",
          value: (
            <>
              123 Maplewood Drive, Apt 4B
              <br />
              Springfield, IL 62704, United States
            </>
          ),
        },
      ].map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            marginBottom: "0.75rem",
          }}
        >
          <span
            style={{
              width: "90px",
              fontWeight: 600,
              color: dark ? "#f9fafb" : "#111827",
            }}
          >
            {item.label}:
          </span>
          <span style={{ color: dark ? "#d1d5db" : "#4b5563" }}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Investment Profile Card */}
<div
  style={{
    background: dark ? "#0F172A" : "#F8FAFC", // cool blue-gray tone
    borderRadius: "16px",
    padding: "2rem 1.5rem",
    boxShadow: dark
      ? "0 2px 8px rgba(59,130,246,0.25)"
      : "0 4px 16px rgba(59,130,246,0.15)",
    border: dark ? "1px solid #1E3A8A" : "1px solid #BFDBFE",
    transition: "0.3s ease",
  }}
>
  <h3
    style={{
      fontSize: "1rem",
      fontWeight: 600,
      color: dark ? "#E0F2FE" : "#1E3A8A",
      marginBottom: "1.5rem",
    }}
  >
    Investment Profile
  </h3>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "1.2rem",
      fontSize: "0.9rem",
      color: dark ? "#CBD5E1" : "#1E293B",
    }}
  >
    {/* Investment Range */}
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "12px",
          background: dark ? "#1E3A8A" : "#DBEAFE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: dark ? "#BFDBFE" : "#1E40AF",
        }}
      >
        <FiDollarSign size={18} />
      </div>
      <div>
        <p style={{ fontWeight: 600 }}>Investment Range</p>
        <p>$2M – $10M</p>
      </div>
    </div>

    {/* Stage */}
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "12px",
          background: dark ? "#1E3A8A" : "#DBEAFE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: dark ? "#BFDBFE" : "#1E40AF",
        }}
      >
        <FiTarget size={18} />
      </div>
      <div>
        <p style={{ fontWeight: 600 }}>Stage</p>
        <p>Series A–B</p>
      </div>
    </div>

    {/* Geographic Focus */}
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "12px",
          background: dark ? "#1E3A8A" : "#DBEAFE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: dark ? "#BFDBFE" : "#1E40AF",
        }}
      >
        <FiGlobe size={18} />
      </div>
      <div>
        <p style={{ fontWeight: 600 }}>Geographic Focus</p>
        <p>North America</p>
      </div>
    </div>

    {/* Investment Focus */}
    <div>
      <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
        Investment Focus
      </p>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {["SaaS", "FinTech", "B2B"].map((tag, i) => (
          <span
            key={i}
            style={{
              background: dark ? "#1E3A8A" : "#E0F2FE",
              color: dark ? "#E0F2FE" : "#1E40AF",
              fontSize: "0.8rem",
              padding: "0.3rem 0.75rem",
              borderRadius: "9999px",
              fontWeight: 500,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

  </div>
</div>


    
  );
}
