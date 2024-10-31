import React from 'react'
import Main from "../components/main/Main"
import Footer from '../components/footer/Footer'

export default function Homepage(props) {
  const { response } = props;
  return (
    <div>
      <p>this is from backend {response}</p>
      <Main />
      <Footer />
    </div>
  )
}
