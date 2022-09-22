import { useState } from "react";



function App() {

const [form, setForm] = useState({
  amount: 0,
  description: " ",
  date: " ",
});

function handleInput(e){

  setForm({ ...form, [e.target.name]: e.target.value });
}



  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/transaction', { 
      method: "POST",
      body: form,
    });
    console.log(res);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>

      <input 
      type="number"
      name="amount"
      value={form.amount} 
      onChange={handleInput} 
      placeholder="Enger transaction amount"

      />

      <input 
      type="text" 
      name="description"
      value={form.description} 
      onChange={handleInput} 
      placeholder="Enter transaction details"

      />

      <input 
      type="date" 
      name="date"
      value={form.date} 
      onChange={handleInput}
      />
       
      <button type="submit">SUBMIT</button>

      </form>
    </div>
  );
}

export default App;
