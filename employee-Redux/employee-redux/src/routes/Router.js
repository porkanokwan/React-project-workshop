import { Route, Routes } from 'react-router-dom'
import AddForm from '../pages/AddForm'
import EditForm from '../pages/EditForm'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/form-add' element={<AddForm/>}/>
      <Route path='/form-edit/:empId' element={<EditForm/>}/>
      <Route path='/profile/:empId' element={<Profile/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
  )
}

export default Router