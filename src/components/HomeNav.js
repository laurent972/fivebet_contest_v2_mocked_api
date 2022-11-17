import React from 'react'

import {PersonPlusFill, Speedometer, PersonSquare, Stars} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'


export default function HomeNav() {
  return (
    <>
      <h4 className="text-center">Bienvenue sur FivebetContest</h4>
      <p className="text-center fs-italic">Vous pouvez :</p>

      <div className="d-flex justify-content-center">
         <Link to='/add-contestant' type="button" className="btn btn-third m-2"><PersonPlusFill size={20} /> <br/> Inscrire un joueur</Link>
         <Link to='/contestants' type="button" className="btn btn-secondary m-2"><Speedometer size={20} /> <br/>Ajouter des points</Link>
         <Link to='/leaderboard' type="button" className="btn btn-primary  m-2"><Stars size={20} /> <br/>Classement</Link>
      </div>

      
        <h5 className="text-center fs-6 fw-bold mt-5">Pas encore de compte ?</h5>
        <div className="d-flex justify-content-center">
          <a href="https://fivebetpoker.com/inscription/" target="_blank" className="btn btn-outline-primary btn-sm m-2">
            <PersonSquare size={20} /> Créer un compte
          </a>
        </div>

    </>
  )
}
