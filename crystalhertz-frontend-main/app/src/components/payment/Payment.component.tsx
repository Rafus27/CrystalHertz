// lib
import { FC } from "react";
import { useLocation, useParams } from "react-router-dom";

// styles

export const Payment: FC = (): JSX.Element => {
  const { id } = useParams();

  const { state } = useLocation();
  
  return (
    <span style={{ color: "white" }}>{id}::{state.variants}</span>
  )
}