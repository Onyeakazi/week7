// src/components/ServiceCard.jsx
export default function ServiceCard({ title, desc }) {
  return (
    <div className="service-card">
      <h4>{title}</h4>
      <p style={{color: "gray"}}>{desc}</p>
    </div>
  );
}