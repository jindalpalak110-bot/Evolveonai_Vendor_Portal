import React, {useState} from 'react';

const Profile: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editing, setEditing] = useState(false);

  const maskedEmail = (emailStr: string) => {
    if (!emailStr) return '';
    const [local, domain] = emailStr.split('@');
    const visible = local.slice(0, 2) + '***';
    return `${visible}@${domain}`;
  };

  return (
    <div style={{padding: 24}}>
      <h1>Profile</h1>
      <div>
        <label>Name</label>
        {editing ? (
          <input value={name} onChange={e => setName(e.target.value)} />
        ) : (
          <div>{name || 'Your name'}</div>
        )}
      </div>
      <div>
        <label>Email</label>
        {editing ? (
          <input value={email} onChange={e => setEmail(e.target.value)} />
        ) : (
          <div>{maskedEmail(email)}</div>
        )}
      </div>
      <button onClick={() => setEditing(!editing)}>{editing ? 'Save' : 'Edit'}</button>
    </div>
  );
};

export default Profile;
