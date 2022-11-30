
import '../index.css';
import Employee from '../components/Employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from "../components/Header"


function Employees() {
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: 'Ashley', 
        role: 'Dev', 
        img:"https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
      {
        id: 2,
        name: 'Pam', 
        role: 'Project Manager', 
        img:"https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg" 
      },
      {
        id: 3,
        name: 'Steve', 
        role: 'Manger', 
        img:"https://images.pexels.com/photos/14440674/pexels-photo-14440674.jpeg" 
      },
      {
        id: 4,
        name: 'Angela', 
        role: 'Accountant', 
        img:"https://images.pexels.com/photos/8837775/pexels-photo-8837775.jpeg" 
      },
      {
        id: 5,
        name: 'Dwight', 
        role: 'Assistant Manager', 
        img:"https://images.pexels.com/photos/25758/pexels-photo.jpg" 
      },
    ]
  )

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
        if(id === employee.id){
          return {...employee, name: newName, role: newRole}
        }
        return employee
    });
    setEmployees(updatedEmployees)
  }

  function newEmployee(name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee])
  }

  const showEmployees = true;

  return (
    <div className="App bg-gray-300 min-h-screen">
      {showEmployees ? 
      <>
      <div className='flex flex-wrap justify-center my-4'>
        {employees.map((employee) => {
          const editEmployee = <EditEmployee 
            id={employee.id} 
            name={employee.name} 
            role={employee.role} 
            updateEmployee={updateEmployee}/>
          return (
            <Employee 
              key={employee.id}
              id={employee.id}
              name={employee.name} 
              role={employee.role} 
              img={employee.img}
              editEmployee={editEmployee}
            />
            )
        })}
      </div>
      <AddEmployee newEmployee={newEmployee}></AddEmployee>
      </>:
      <p>you cannot see the employees</p>}
    </div>
  );
}

export default Employees;
