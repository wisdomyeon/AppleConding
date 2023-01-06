import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
function Cart() {

    let allState = useSelector((state) => { return state })
    console.log(allState.user);
    console.log(allState.inventory);
    console.log(allState.items[0]);
    //또는 let user = useSelector((state)=>{ return state.user}) 식으로 사용가능
    // console.log(user);

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{allState.items[0].id + 1}</td>
                    <td>{allState.items[0].name}</td>
                    <td>{allState.items[0].count}</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>{allState.items[1].id + 1}</td>
                    <td>{allState.items[1].name}</td>
                    <td>{allState.items[1].count}</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    )
}
export default Cart;