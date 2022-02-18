function FilterList() {
    // sort by price - low, high
    // sort by rating - low high
    return(
    <div>
        <div>Filters</div>
        <form>
            <input type="radio" value="Low" name="sort"/>
            <input type="radio" value="High" name="sort"/>
            {/* <input type="radio" value="High" name="sort"/> */}
        </form>
    </div>)
}

export default FilterList;