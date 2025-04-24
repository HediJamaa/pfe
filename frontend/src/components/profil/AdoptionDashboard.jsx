import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdoptionRequest, fetchAdoptionRequests } from '../../JS/userSlice/adoptionSlice';
import { Link } from "react-router-dom";
import { FaCheck, FaTimes } from 'react-icons/fa';

function AdoptionDashboard() {
  const dispatch = useDispatch();
  const { requests, loading, error } = useSelector(state => state.adoption);
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    dispatch(fetchAdoptionRequests());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette demande ?")) {
      dispatch(deleteAdoptionRequest(id));
    }
  };

  if (!user) {
    return <p style={{ color: 'red' }}>Utilisateur non connecté.</p>;
  }

  const userRequests = requests.filter(r => r.iduser === user._id);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Liste des demandes d’adoption</h2>
      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Numéro de télephone</th>
            <th>Email</th>
            <th>Raison</th>
            <th>Date</th>
            <th>Animal ID</th>
            <th style={{ textAlign: "center" }}>Confirmer l'adoption </th>
            <th style={{ textAlign: "center" }}>Refuser l'adoption</th>
          </tr>
        </thead>
        <tbody>
          {userRequests.map((r) => (
            <tr key={r._id}>
              <td>{r.name}</td>
              <td>{r.télephone}</td>
              <td>{r.email}</td>
              <td>{r.reason}</td>
              <td>{new Date(r.createdAt).toLocaleString()}</td>
              <td><Link to={`/animaux/${r.idanimal}`}>{r.idanimal}</Link></td>
              <td style={{ textAlign: "center" }}>
                <span style={{fontSize: 26, cursor: 'pointer'}}>✅</span>
              </td>
              <td style={{ textAlign: "center",display:"flex",justifyContent:"center" }}>
                <span style={{
                  marginTop:13,
                  width: '27px',
                  height: '27px',
                  backgroundColor: '#ef4444', 
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>                    <FaTimes style={{ color: 'white', fontSize: '20px',paddingRight:8 }} />

                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdoptionDashboard;
