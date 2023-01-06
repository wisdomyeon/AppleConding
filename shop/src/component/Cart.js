import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { plusCount } from "./../store";
function Cart() {

    let allState = useSelector((state) => { return state })
    console.log(allState.user);
    console.log(allState.inventory);
    console.log(allState.items[0]);
    //또는 let user = useSelector((state)=>{ return state.user}) 식으로 사용가능
    // console.log(user);
    let dispatch = useDispatch()

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
                {
                    allState.items.map((cur, index) =>
                        <tr>
                            <td>{allState.items[index].id + 1}</td>
                            <td>{allState.items[index].name}</td>
                            <td>{allState.items[index].count}</td>
                            <td><button onClick={() => {
                                dispatch(plusCount())
                            }}>+</button></td>
                        </tr>
                    )
                }
            </tbody >
        </Table >
    )
}
export default Cart;