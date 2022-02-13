function Billing() {
    return (  
        <div>
        <div>Billing Address</div>
            <div>
                <input type="text" placeholder="First Name*"  />
                <input type="text" placeholder="Last Name*"  />
            </div>
            <input type="text" placeholder="Address*"  />
            <div>
                <input type="text" placeholder="State" />
            </div>
            <div>
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Zip" />
            </div> 
            <input type="checkbox" />
            <label>Same as shipping address</label>
            <div>Payment Details</div>
            <input type="text" placeholder="Credit Card Number"/>
            <div>
                <input type="text" placeholder="Security Code"/>
                <input type="date" placeholder="Expiration"/>
            </div>
        </div>
    );
}

export default Billing;