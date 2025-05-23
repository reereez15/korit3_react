import { useState } from 'react'

export default function Myform3() {
  const [ user, setUser ] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  const handleSubmit = event => {
    alert(`안녕하세요 ${user.lastName} ${user.firstName}. Email 주소는 ${user.email}입니다.`)
    event.preventDefault()
  }

  const handleChange = event => {
    setUser( {...user, [event.target.value]: event.target.name})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name </label>
      <input type="text" name="firstName" value={user.firstName} onChange={handleChange} />
      <br /><br />
      <label>Last Name </label>
      <input type="text" name="lastName" value={user.lastName} onChange={handleChange}  />
      <br /><br />
      <label> Email </label>
      <input type="text" name="Email" value={user.email} onChange={handleChange}  />
      <br /><br /> 
      <input type="submit" value="제출"/>
    </form>
  )
}