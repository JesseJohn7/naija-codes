"use client";
import React from "react";

type Props = {
  query: string;
  setQuery: (q: string) => void;
};

export default function SearchBar({ query, setQuery }: Props) {
  return (
    <div className="search-wrap">
      <input
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search networks or banks  e.g., MTN, GTBank..."
      />
    </div>
  );
}
