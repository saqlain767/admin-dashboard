import React, { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const CreateUser=()=>{
    let[name, setName]=useState("")
    let[salary, setSalary]=useState("")
    let[company, setCompany]=useState("")

    let Navigator=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }

    let formHandler=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
            console.log("DATA HAS BEEN ADDED");
        }
        )
        .catch(()=>{
            console.log("SOMTHING IS FISHY");
        }
        ) 
        Navigator("/users")
        
    }
    return(
        <div id={style.myform}>
         <form action="">
            <table>
                <th colSpan="2"><h4>User Details</h4></th>
            <tr>
                    <td><label htmlFor="">Name</label></td>
                    <td>:<input type="text" value={name} onChange={nameData}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Salary</label></td>
                    <td>:<input type="text" value={salary} onChange={salaryData}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Company</label></td>
                    <td>:<input type="text" value={company} onChange={companyData}/></td>
                </tr>
                <tr>
                    <th colSpan={2} onClick={formHandler}><button>Submit</button></th>
                </tr>
            </table>
         </form>
        </div>
    )
}
export default CreateUser 