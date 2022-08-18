import React from "react";
import { useSelector } from "react-redux";
import ListContainer from "../containers/ListContainer";

export default function Home() {
  const token = useSelector<any , string | null> ((state) => state.auth.token)

  if (token === null) {
    // 로그인 페이지로
  }
  return <ListContainer />
}