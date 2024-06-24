import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import style from "./home.module.css"
const Editusers=()=>{
    let[name, setName]=useState("")
    let[salary, setSalary]=useState("")
    let[company, setCompany]=useState("")

    let {index}=useParams()
    let Navigator=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${index}`)
        .then((resp)=>{
            console.log(resp.data);
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        })
    },[index])

    const nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    const salaryData=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)
    }
    const companyData=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
    }

    let formHandler=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.put(`http://localhost:3000/users/${index}`,payload)
        .then(()=>{
            console.log("DATA HAS BEEN SUCESSFULLY UPDATED");
        })

        Navigator("/users")

    }
   return(
    <div id={style.myform}>
         <form action="">
            <table>
                <th colSpan="2"><h4>User Details</h4></th>
            <tr>
                    <td><label htmlFor="">Name</label></td>
                    <td>:<input type="text" value={name} onChange={nameData} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Salary</label></td>
                    <td>:<input type="text" value={salary} onChange={salaryData} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Company</label></td>
                    <td>:<input type="text" value={company} onChange={companyData}/></td>
                </tr>
                <tr>
                    <th colSpan={2} ><button onClick={formHandler}>update</button></th>
                </tr>
            </table>
         </form>
        </div>
    )
}

export default Editusers