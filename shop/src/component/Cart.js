import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
function Cart() {

    let allState = useSelector((state) => { return state })
    console.log(allState);

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                </tr>
            </tbody>
        </Table>
    )
}
export default Cart;