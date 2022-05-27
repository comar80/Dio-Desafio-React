import React, { useState } from 'react'
import * as S from './styled'
import useGithub from '../../hooks/github-hooks'


function Header() {

  const {getUser} = useGithub(); 
  const [usernameForSearch, setUsernameForSearch] = useState(undefined)

  const submitGetUser = () => {

    if(!usernameForSearch) return;
    return getUser(usernameForSearch);
  }

  return (
    <div>
        <S.Wrapper>
            <input type='text' placeholder='Digite o username' onChange={(event) => setUsernameForSearch(event.target.value)}/>
            <button type='submit' onClick={submitGetUser}><span>Buscar</span></button>

        </S.Wrapper>

    </div>
  )
}

export default Header;