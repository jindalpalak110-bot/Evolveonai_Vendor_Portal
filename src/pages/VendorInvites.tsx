import React, { useState } from 'react';

interface Invite {
  id: number;
  email: string;
  status: 'Pending' | 'Accepted' | 'Expired';
  invitedAt: string;
}

const VendorInvites: React.FC = () => {
  const [invites, setInvites] = useState<Invite[]>([]);
  const [email, setEmail] = useState('');

  const handleInvite = () => {
    if (!email) return;
    setInvites([
      ...invites,
      {
        id: invites.length + 1,
        email,
        status: 'Pending',
        invitedAt: new Date().toISOString().slice(0, 10),
      },
    ]);
    setEmail('');
  };

  return (
    <div style={{padding: 24}}>
      <h1>Vendor Invites</h1>
      <div style={{display: 'flex', gap: 8}}>
        <input placeholder="Vendor email" value={email} onChange={e => setEmail(e.target.value)} />
        <button onClick={handleInvite}>Send Invite</button>
      </div>
      <table style={{width: '100%', marginTop: 16}}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Status</th>
            <th>Invited At</th>
          </tr>
        </thead>
        <tbody>
          {invites.map(inv => (
            <tr key={inv.id}>
              <td>{inv.email}</td>
              <td>{inv.status}</td>
              <td>{inv.invitedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorInvites;
