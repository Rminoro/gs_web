import Link from "next/link";


export default function Cabecalho() {

    const user = JSON.parse(sessionStorage.getItem("user-info"));
    const [usuario] = useState(user);
  
    const handleLogout = () => {
      sessionStorage.removeItem("token-user");
      sessionStorage.removeItem("user-info");
      window.location.href = "/login";
    }
  
    if(sessionStorage.getItem("token-user")){
      
      return (
          <header className='cabecalho-home-on'>
          <nav className='nav-login-on'>
            <ul>
            <li><Link className='nav-item' href="/">HOME</Link></li>
             
              <li><Link className='nav-item' onClick={handleLogout} href="/"><Image className='img-login' src={Sair} alt='Icone para sair do site, formato de porta abrindo'/></Link></li>
            </ul>
            <div>
              <p>{usuario.name} - {usuario.email}</p>
            </div>
          </nav>
      </header>
    )}else{
        
     return (
      <header className='cabecalho'>
          <nav className='nav-login-off'>
            <Link href="/login"><Image className='img-login' src={Login} alt="Icone de login em formato de pessoa"/></Link>
          </nav>
      </header>
    ) 
     }
    }