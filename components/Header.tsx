"use client";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        {/* No logo as requested */}
        <div>
          <h1>Naija Quick Codes</h1>
          <div className="header-sub">All your USSD codes in one place 🇳🇬</div>
        </div>
      </div>
    </header>
  );
}
