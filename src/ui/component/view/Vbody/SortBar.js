const SortBar = () => {
    return <div className="recommended">
        <form className="form" action="/action_page.php">
            <select className="name" name="recom" id="recom">
                <option value="recommended"> SORT BY </option>
                <option value="recommended">Recommended</option>
                <option value="price">Price</option>
                <option value="opel">Type</option>
                <option value="audi">Model</option>
            </select>
        </form>
    </div>
};

export default SortBar;