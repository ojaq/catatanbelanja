import { useState } from "react"

export default function Form({onAddItem}){
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(1)
  
    function handleSubmit(e) {
      e.preventDefault()
  
      if(!name) return
  
      const newItem = {name, quantity, checked: false, id: Date.now()}
      onAddItem(newItem)
      console.log(newItem);
  
      setName('')
      setQuantity(1)
    }
  
    return(
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Hari ini belanja apa kita?</h3>
        <div>
            <input type="number" placeholder="berapa?" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
            <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button>Tambah</button>
      </form>
    )
  }