export default function ReadOnlyRow({ inventoryRow, handleEditClick, handleDeleteClick }) {
    return (
        <tr key={inventoryRow.id} >
            <td>{inventoryRow.item}</td>
            <td>{inventoryRow.number}</td>
            <td>{inventoryRow.date}</td>
            <td>
                <button onClick={event => handleEditClick(event, inventoryRow)}>
                    Edit
                </button>
                <button type='button' onClick={() => handleDeleteClick(inventoryRow.id)}>Delete</button>
            </td>
        </tr>
    )
}