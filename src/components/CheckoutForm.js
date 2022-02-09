function CheckoutFrom() {   
// - Name
// - Shipping Address
// - Billing Address
// - Credit Card Info
// - Submit button
    return(
    <form>
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
        <label>Billing Address</label>
        <input type="text" />
        <label>Credit</label>
        <input type="text" />
        <button>Submit</button>
    </form>)
}

export default CheckoutFrom;