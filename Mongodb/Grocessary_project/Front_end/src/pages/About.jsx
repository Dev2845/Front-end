import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Info, Award, Users, BookOpen } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Partner Brand Labels", val: "150+" },
    { label: "Active Shopping Users", val: "2.4M" },
    { label: "Stores Globally Listed", val: "48" },
    { label: "Five-Star Rating Reviews", val: "99.2%" }
  ];

  const team = [
    { name: "Julian Sterling", role: "Founder & Chief Executive Officer", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" },
    { name: "Seraphina Lin", role: "Lead UI Design Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" },
    { name: "Devon Reynolds", role: "Chief Logistics Coordinator", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80" }
  ];

  return (
    <div className="animate-fade">
      <Breadcrumb />
      
      <div className="container py-48">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{ fontSize: "36px", fontWeight: "800" }}>Our Journey Story</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", marginTop: "8px" }}>Building the smart hub of digital premium retail commerce.</p>
        </div>

        {/* Story Section */}
        <section className="grid-cols-2" style={{ alignItems: "center", gap: "48px" }}>
          <div>
            <h2 className="mb-16" style={{ fontSize: "24px" }}>Modern Premium Shopping Experience</h2>
            <p className="mb-16" style={{ color: "var(--text-muted)", fontSize: "14px" }}>
              Founded in 2021, SmartMall set out to bridge the gap between fresh organic groceries, high speed electronics, and high fashion apparel. We believe that the shopping experience should be intuitive, aesthetic, and completely frictionless.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
              Through strict quality checks and express delivery partnerships, we cater to millions of clients globally, delivering premium goods from international brands directly to domestic doorsteps.
            </p>
          </div>
          <div className="card glass-card overflow-hidden" style={{ height: "300px" }}>
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" alt="Mall Retail Concept" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-48" style={{ borderTop: "1px solid var(--border-color)", margin: "48px 0" }}>
          <div className="grid-cols-4 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="card p-24">
                <h3 className="color-primary" style={{ fontSize: "36px", fontWeight: 800 }}>{stat.val}</h3>
                <span style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: 600 }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Mission and Vision details */}
        <section className="grid-cols-2 py-48" style={{ borderTop: "1px solid var(--border-color)" }}>
          <div className="card glass-card p-24" style={{ display: "flex", gap: "16px" }}>
            <div className="add-cart-btn-circle" style={{ width: "48px", height: "48px", cursor: "default", flexShrink: 0 }}>
              <Award size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, marginBottom: "8px" }}>Our Core Mission</h3>
              <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                To curate and deliver authentic products across multiple lifestyle categories, while maintaining global standards of security, user support, and shipping speeds.
              </p>
            </div>
          </div>

          <div className="card glass-card p-24" style={{ display: "flex", gap: "16px" }}>
            <div className="add-cart-btn-circle" style={{ width: "48px", height: "48px", cursor: "default", flexShrink: 0 }}>
              <Users size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, marginBottom: "8px" }}>Our Vision Forward</h3>
              <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                To integrate predictive AI logistics models, custom layout frameworks, and responsive storefronts that customize shopping dynamically to each client.
              </p>
            </div>
          </div>
        </section>

        {/* Executive Team */}
        <section className="py-48" style={{ borderTop: "1px solid var(--border-color)" }}>
          <div className="section-header text-center">
            <h2 className="section-title">Meet Our Executive Team</h2>
            <p className="section-subtitle">Dedicated leaders pushing for visual and operational excellence</p>
          </div>
          <div className="grid-cols-3">
            {team.map((member, i) => (
              <div key={i} className="card p-24 text-center">
                <img src={member.img} alt={member.name} style={{ width: "100px", height: "100px", borderRadius: "50%", margin: "0 auto 16px auto", objectFit: "cover" }} />
                <h3 style={{ fontSize: "18px", fontWeight: 800 }}>{member.name}</h3>
                <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{member.role}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
