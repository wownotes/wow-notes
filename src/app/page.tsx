"use client";

import React, { useState } from "react";
import Toggle from "@/components/Toggle";
import List from "@/components/List";

const Homepage = () => {
  const [activeContent, setActiveContent] = useState<"dungeons" | "raids">(
    "dungeons"
  );

  // Placeholder data
  const dungeons = ["Grimbatol", "Stone Vault"];
  const raids = ["Castle Nathria", "Sanctum of Domination"];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center">Welcome to WoW Notes</h1>
      <p className="text-center text-gray-500">
        Track your dungeons and raids easily.
      </p>

      {/* Content Toggle */}
      <div className="flex justify-center mt-6">
        <Toggle
          options={[
            { label: "Dungeons", value: "dungeons" },
            { label: "Raids", value: "raids" },
          ]}
          activeValue={activeContent}
          onToggle={(value: "dungeons" | "raids") => setActiveContent(value)}
        />
      </div>

      {/* Content List */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">
          {activeContent === "dungeons" ? "Dungeons" : "Raids"}
        </h2>
        <List items={activeContent === "dungeons" ? dungeons : raids} />
      </div>
    </div>
  );
};

export default Homepage;
