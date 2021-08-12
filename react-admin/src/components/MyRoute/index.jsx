import React  from 'react'
import { Redirect, Route } from "react-router-dom"

function MyRote(props) {
  let token = sessionStorage.getItem('token')
  return (
    <div>
      {
        token ? <Route {...props}></Route> :
          <Redirect to="/login"></Redirect>
      }
    </div>
  )
}

export default MyRote