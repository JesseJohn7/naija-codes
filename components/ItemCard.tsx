"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiCheck } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

type NetworkCode = { title: string; code: string };
type ItemCardProps = {
  name: string;
  image: string;
  codes?: readonly NetworkCode[];
  ussd?: string;
  notes?: string;
};

export default function ItemCard({ name, image, codes, ussd, notes }: ItemCardProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (txt: string) => {
    try {
      await navigator.clipboard.writeText(txt);
      setCopied(txt);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      // ignore errors
    }
  };

  return (
    <motion.article
      className="card"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="card-head">
        <img src={image} alt={name} />
        <div>
          <div className="card-title">{name}</div>
          {notes && <div className="card-note">{notes}</div>}
        </div>
      </div>

      {codes &&
        codes.map((c, i) => (
          <div className="code-row" key={i}>
            <div className="label">{c.title}</div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div className="code">{c.code}</div>

              {/* Dial Button */}
              <a href={`tel:${c.code}`} className="dial-btn" aria-label={`Dial ${c.code}`}>
                <FaPhoneAlt />
              </a>

              {/* Copy Button */}
              <button className="copy-btn" onClick={() => copyToClipboard(c.code)} aria-label={`Copy ${c.code}`}>
                {copied === c.code ? (
                  <FiCheck />
                ) : (
                  <FiCopy />
                )}
              </button>
            </div>
          </div>
        ))}

      {ussd && (
        <div className="code-row">
          <div style={{ flex: 1 }} />
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div className="code">{ussd}</div>

            {/* Dial Button */}
            <a href={`tel:${ussd}`} className="dial-btn" aria-label={`Dial ${ussd}`}>
              <FaPhoneAlt />
            </a>

            {/* Copy Button */}
            <button className="copy-btn" onClick={() => copyToClipboard(ussd)} aria-label={`Copy ${ussd}`}>
              {copied === ussd ? <FiCheck /> : <FiCopy />}
            </button>
          </div>
        </div>
      )}
    </motion.article>
  );
}
