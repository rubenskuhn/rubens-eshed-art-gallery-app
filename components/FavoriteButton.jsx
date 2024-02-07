// import svg from "./resources/assets/heart.svg";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function isFavorite() {
  return (
    <ToggleButton
      class="favorite-button"
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <CheckIcon />
    </ToggleButton>
  );
}
