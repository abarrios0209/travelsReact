import React,{ useState } from 'react'
import './Login.component.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginComponent = () => {

  const [state,setState ] = useState({
    email:'',
    password:'',
    name:''
  })

  const navigate = useNavigate();


  const [register,setRegister ] = useState(false);


  const onChange = ({target})=>{
    const {name,value} = target;
    setState({
      ...state,
      [name]:value
    })
  }

  const sendForm=async(event)=>{
    event.preventDefault();
    console.log('envio de formulario')
    if (!register){
      const {email,password} = state;
      let data = {
        email:email,
        password:password
      }
      console.log(data)
      axios.post('https://blogangie-production.up.railway.app/api/auth/login',data).then(response => {
        console.log(response)
        if(response.status === 200){
          console.log('entro')
          navigate("/travels")

        }
      }).catch(error => {
        console.log(error)
      });
    }else{
      console.log(state)
      axios.post('https://blogangie-production.up.railway.app/api/users',state).then(response => {
        console.log(response.data)
        if(response.status === 200){
          alert('User created successfully');
        }
      }).catch(error => {
        console.log(error)
      });
      setRegister(false);
      setState({
        email:'',
        password:''
      })
    }
  }

  const onChangeRegister=()=>{
    setRegister(!register)
    setState({
      email:'',name:'',password:''
    })
  }

  const fieldsLogin = [
    {
      name:'email',
      placeholder:'Email',
      type:'text'
    },
    {
      name:'password',
      placeholder:'Password',
      type:'password'

    }
  ]

  const fieldsRegister = [
    ...fieldsLogin,
    {
      name:'name',
      placeholder:'Name',
      type:'text'
    }
  ]


  return (
    <div className='login_component'>
      <div className="shadow">
        <div className='init'>
          <h2>{ (register) ? 'User Register':'Log In'} </h2>
        </div>
        <form onSubmit={sendForm}>
          {
            register ? fieldsRegister.map(i=>(<input type={i.type} placeholder={i.placeholder} value={state[i.name]} name={i.name}  onChange={onChange} key={i.placeholder} />)):
            fieldsLogin.map(i=>(<input type={i.type} placeholder={i.placeholder} value={state[i.name]} name={i.name} key={i.type} onChange={onChange}/>))
          }
          <input type="submit"  value={(register)?'Register':'Log In'}/>
        </form>
        <button className='buttonRegister' onClick={onChangeRegister}>{(register)?'Log In':'User Register'}</button>
      </div>

    </div>
  )
}
