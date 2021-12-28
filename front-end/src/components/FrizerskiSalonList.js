import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
function FrizerskiSalonList () {
    const [frizerskiSaloni, setfrizerskiSaloni] = useState([]);
 
    useEffect(() => {
        getFrizerskiSaloni();
    }, []);
 
    const getFrizerskiSaloni = async () => {
        const response = await axios.get('http://localhost:5000/frizerskisalonpodaci');
        setfrizerskiSaloni(response.data);
    }
 
    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/frizerskisalonpodaci/${id}`);
        getFrizerskiSaloni();
    }
 
    return (
        <div>
            <Link to="/add">Add New</Link>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>naziv</th>
                        <th>adresa</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead> 
                <tbody>
                    { frizerskiSaloni.map((frizerskiSalon, index) => (
                        <tr key={ frizerskiSalon.id }>
                            <td>{ index + 1 }</td>
                            <td>{ frizerskiSalon.naziv }</td>
                            <td>{ frizerskiSalon.adresa }</td>
                            <td> <Link to={`/edit/${frizerskiSalon.id}`}>Edit</Link> </td>
                            <td><button onClick={ () => deleteProduct(frizerskiSalon.id) }>Delete</button></td> 
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default FrizerskiSalonList