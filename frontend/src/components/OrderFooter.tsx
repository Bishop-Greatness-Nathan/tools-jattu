import { Link } from "react-router-dom"

function OrderFooter({
  soldBy,
  cash,
  bank,
  total,
  balance,
  _id,
}: {
  soldBy: string
  cash: number
  bank: number
  total: number
  balance: number
  _id: string
}) {
  return (
    <div className='bg-blue-300 text-white text-[8px] font-semibold md:text-base flex justify-between'>
      <h2 className='p-2 col-span-2'>Sold by: {soldBy}</h2>
      <h2 className='p-2'>
        Cash:{" "}
        {new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(cash)}
      </h2>
      <h2 className='p-2'>
        Bank:{" "}
        {new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(bank)}
      </h2>
      <h2 className='p-2'>
        Total:{" "}
        {new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(total)}
      </h2>
      <h2 className={`p-2 ${!balance ? "text-white" : "text-red-600"} `}>
        Balance:{" "}
        {new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(balance as number)}
      </h2>
      <Link
        to={`../pay-debt/${_id}`}
        className={`${!balance && "hidden"} p-2 text-red-600`}
      >
        pay debt
      </Link>
    </div>
  )
}

export default OrderFooter
