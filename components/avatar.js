export default function Avatar({ name, picture }) {
  return (
    <div className="flex flex-col items-center">
      <img src={picture} className="w-12 h-12 rounded-full mb-4" alt={name} />
      <div className="text-base text-gray-900 font-bold">{name}</div>
    </div>
  )
}
