// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

export default function _({ medium_cover_image, id, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt="FailLoadImage" />
      <p>{id}</p>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}