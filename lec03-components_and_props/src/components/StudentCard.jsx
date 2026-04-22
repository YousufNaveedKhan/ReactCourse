function StudentCard({ name, role, description, image }) {
  const cardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '320px'
  };

  const imageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #097897'
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  return (
      <div style={cardStyle}>
        <img 
          src={image} 
          alt="profile" 
          style={imageStyle} 
        />
        <h2 style={{ color: 'black', margin: '15px 0 5px' }}>{role}</h2>
        <p style={{ color: 'black', fontWeight: 'bold' }}>{name}</p>
        <p style={{ color: 'gray', fontSize: '14px' }}>
          {description}
        </p>
        <button style={buttonStyle}>Follow Profile</button>
      </div>
  );
}

export default StudentCard;