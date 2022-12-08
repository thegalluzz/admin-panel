import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import data from '../mock-data.json'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import ReadOnlyRow from '../components/ReadOnlyRow'
import EditableRow from '../components/EditableRow'

export default function Inventory() {

    const [inventoryRow, setInventoryRow] = useState(() => data);
    const [editRowId, setEditRowId] = useState(null);

    const [item, setItem] = useState(() => "");
    const [number, setNumber] = useState(() => "");
    const [date, setDate] = useState(() => "");
    const [editInventoryData, setEditInventoryData] = useState({
        item: "",
        number: "",
        date: "",
    })

    function handleFormSubmit(event) {
        event.preventDefault()
        const newInventoryRow = {
            "id": nanoid(),
            "item": item,
            "number": number,
            "date": date
        }
        const newInventory = [...inventoryRow, newInventoryRow];
        setInventoryRow(newInventory);
    }

    function handleEditFormSubmit(event) {
        event.preventDefault()

        const editedInventoryRow = {
            id: editRowId,
            item: editInventoryData.item,
            number: editInventoryData.number,
            date: editInventoryData.date
        }

        const newInventoryRow = [...inventoryRow];

        const index = inventoryRow.findIndex((inventoryRow) => inventoryRow.id === editRowId);

        newInventoryRow[index] = editedInventoryRow;

        setInventoryRow(newInventoryRow)
        setEditRowId(null)

    }

    function handleEditInventoryData(event) {
        const fieldName = event.target.getAttribute("name")
        const fieldValue = event.target.value;

        const newInventoryData = { ...editInventoryData };
        newInventoryData[fieldName] = fieldValue;
        setEditInventoryData(newInventoryData);

    }

    function handleEditClick(event, inventoryRow) {
        setEditRowId(inventoryRow.id);

        const InventoryValues = {
            item: inventoryRow.item,
            number: inventoryRow.number,
            date: inventoryRow.date
        }

        setEditInventoryData(InventoryValues);
    }

    function handleCancelClick() {
        setEditRowId(null)
    }
    function handleDeleteClick(inventoryRowId) {
        const newInventoryData = [...inventoryRow];
        const index = inventoryRow.findIndex((inventoryRow) => inventoryRow.id === inventoryRowId);
        newInventoryData.splice(index, 1);
        setInventoryRow(newInventoryData)
    }

    return (
        <>
            <Navbar />
            <h1>Add an item</h1>
            <form>
                <input
                    type="text"
                    name="item"
                    required="required"
                    placeholder="Enter the item..."
                    onChange={e => setItem(e.target.value)}
                />
                <input
                    type="text"
                    name="number"
                    required="required"
                    placeholder="Enter the number of items..."
                    onChange={e => setNumber(e.target.value)}
                />
                <input
                    type="text"
                    name="date"
                    required="required"
                    placeholder="Enter the date..."
                    onChange={e => setDate(e.target.value)}
                />
                <button type="submit" onClick={handleFormSubmit}>Add</button>
            </form>
            <form onSubmit={handleEditFormSubmit}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Number</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryRow.map(inventoryRow => (
                            <>
                                {editRowId === inventoryRow.id ?
                                    <EditableRow
                                        key={editInventoryData.id}
                                        editInventoryData={editInventoryData}
                                        handleEditInventoryData={handleEditInventoryData}
                                        handleCancelClick={handleCancelClick}
                                    />
                                    :
                                    <ReadOnlyRow
                                        key={inventoryRow.id}
                                        inventoryRow={inventoryRow}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                }
                            </>
                        ))}
                    </tbody>
                </table>
            </form>
        </>
    )
}