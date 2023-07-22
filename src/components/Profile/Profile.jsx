
const Profile = ({user}) => {
  return (
    <>
      <h1>Perfil de usuario</h1>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
    </>
  )
}

export default Profile
