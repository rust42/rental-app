const VehicleItem = ({vehicle}) => {
    return <div>
        <div>Brand: {vehicle.brand}</div>
        <div>Color: {vehicle.color}</div>
        <div>Description: {vehicle.description}</div>
        <div>Model: {vehicle.model}</div>
        <div>Price: {vehicle.pricePerDay}</div>
        <div>Purchase: {vehicle.purchaseDate}</div>
        <div>Vin: {vehicle.vin}</div>
        <hr />
    </div>
};

export default VehicleItem;