
import NewItem from "./new-item"

export default function Page(){
  return(
    <main>
      <header>
        <h1 className="text-center text-3xl font-bold m-2.5">Add New Item</h1>
      </header>
      <NewItem/>
    </main>
  )
}