export default function Profile({ size = 100, isPacked = false }) {
  return (
    <div>
      <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" width={size} height={size} />
      <div>{isPacked && "sss"}</div>
    </div>
  )
}
