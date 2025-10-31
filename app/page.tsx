"use client";

import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/Searchbar";
import ItemCard from "../components/ItemCard";
import { networks, banks } from "../data/codes";

export default function Home() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filteredNetworks = useMemo(() => {
    if (!q) return networks;
    return networks.filter(
      (n) =>
        n.name.toLowerCase().includes(q) ||
        n.codes.some((c) => c.code.toLowerCase().includes(q) || c.title.toLowerCase().includes(q))
    );
  }, [q]);

  const filteredBanks = useMemo(() => {
    if (!q) return banks;
    return banks.filter((b) => b.name.toLowerCase().includes(q) || b.ussd.toLowerCase().includes(q));
  }, [q]);

  return (
    <>
      <Header />
      <main className="container" role="main">
        <SearchBar query={query} setQuery={setQuery} />

        <section aria-labelledby="networks">
          <h2 className="section-title" id="networks"> Networks</h2>
          <div className="grid">
            {filteredNetworks.map((n) => (
              <ItemCard key={n.name} name={n.name} image={n.image} codes={n.codes} />
            ))}
          </div>
        </section>

        <section aria-labelledby="banks" style={{ marginTop: 18 }}>
          <h2 className="section-title" id="banks"> Banks</h2>
          <div className="grid">
            {filteredBanks.map((b) => (
              <ItemCard key={b.name} name={b.name} image={b.image} ussd={b.ussd} notes={b.notes} />
            ))}
          </div>
        </section>

        <footer className="footer">Made with ❤️ - Verify codes before dialing</footer>
      </main>
    </>
  );
}
