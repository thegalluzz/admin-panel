export default function EditableRow({ editInventoryData, handleEditInventoryData, handleCancelClick }) {

    return (
        <tr key={editInventoryData.id}>
            <td>
                <input
                    type="text"
                    name="item"
                    required="required"
                    placeholder="Enter the item..."
                    value={editInventoryData.item}
                    onChange={handleEditInventoryData}
                />
            </td>
            <td id="113">
                <input
                    
                    type="text"
                    name="number"
                    required="required"
                    placeholder="Enter the number of items..."
                    value={editInventoryData.number}
                    onChange={handleEditInventoryData}

                />
            </td>
            <td>
                <input
                    type="text"
                    name="date"
                    required="required"
                    placeholder="Enter the date..."
                    value={editInventoryData.date}
                    onChange={handleEditInventoryData}
                />
            </td>
            <td>
                <button type='submit'>Save</button>
                <button type='button' onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}