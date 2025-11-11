export default function Item({ item: { name, quantity, category }, onSelect }) {
  return (
    <div className="flex justify-center">
      <div
        className=" p-4 m-4 bg-[teal] rounded-xl shadow-md hover:shadow-lg transition cursor-pointer w-full"
        onClick={() => onSelect(name)}
      >
        <ul className="space-y-1 text-white">
          <li className="font-semibold text-lg">Name: {name}</li>
          <li>Quantity: {quantity}</li>
          <li>Category: {category}</li>
        </ul>
      </div>
    </div>
  );
}
