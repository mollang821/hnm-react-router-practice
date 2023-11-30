import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ( {userYn, setUserYn} ) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

    const navigate = useNavigate();

    const goToMain = () => {
      navigate('/');
    }

    const goToLogin = () => {
      console.log("goToLogin userYn : ", userYn);
      if(userYn) {
        setUserYn(false);
        navigate('/');
      }else {
        navigate('/login');
      }
    }

    const search = (event) => {
      if(event.key === "Enter") {
        let keyword = event.target.value;
        navigate(`/?q=${keyword}`);
      }
    }

  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} className="login-icon" />
            <div>{userYn == true ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="nav-section">
        <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png" onClick={goToMain} />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
            {menuList.map(menu => <li>{menu}</li>)}
        </ul>
        <div className="search-area">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
