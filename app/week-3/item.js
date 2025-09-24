export default function Item({ name, quantity, category }) {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 p-4 m-4 bg-[teal] rounded-xl shadow-md hover:shadow-lg transition">
      <ul className="space-y-1 text-white">
        <li className="font-semibold text-lg">Name: {name}</li>
        <li>Quantity: {quantity}</li>
        <li className=" text-white">Category: {category}</li>
      </ul>
    </div>
    </div>
  );
}