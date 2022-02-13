import { useState } from "react"
import { ShippingContainer } from "./StyledComponents";

function Shipping() {
    const [shippingAddress, setShippingAddress] = useState({firstName:"", lastName:"", 
    address:"", state:"", city:"", zip:""})

    const {firstName, lastName, address, state, city, zip } = shippingAddress

    const handleChange = (e) => {
        const {value, name} = e.target;
        setShippingAddress(prev => ({...prev, [name]: value}))
     }

    console.log(firstName)
    console.log(lastName)

    return ( 
        <ShippingContainer>
            <div>Shipping Address</div>
            <div>
                <input type="text" placeholder="First Name*" value={firstName} onChange={(e) => setShippingAddress(prev => ({...prev, firstName: e.target.value}))} />
                <input type="text" placeholder="Last Name*"  value={lastName} onChange={(e) => setShippingAddress(prev => ({...prev, lastName: e.target.value}))} />
            </div>
            <input type="text" placeholder="Address*" value={address} onChange={(e) => setShippingAddress(prev => ({...prev, address: e.target.value}))} />
            <div>
                <input type="text" placeholder="State" value={state} onChange={(e) => setShippingAddress(prev => ({...prev, state: e.target.value}))} />
                <input type="text" placeholder="City" value={city} onChange={(e) => setShippingAddress(prev => ({...prev, city: e.target.value}))} />
            </div>
            <div>
                <input type="text" placeholder="Zip Code" value={zip} onChange={(e) => setShippingAddress(prev => ({...prev, zip: e.target.value}))} />
            </div>
        </ShippingContainer>
     );
}

export default Shipping;