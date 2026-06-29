import { useCart } from "../Context/CartContext";
import { FaShoppingBag } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { HiMinus, HiPlus } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";

function Cart() {
  const {
    item,
    removeFromCart,
    clearCart,
    cartTotal,
    updateQuantity,
    isCartOpen,
    setCartOpen,
  } = useCart();

  const deliveryFee = cartTotal > 20 ? 0 : 1.99;
  const grandTotal = cartTotal + deliveryFee;

  if (!isCartOpen) return null;

  return (
    <div
      onClick={() => setCartOpen(false)}
      className="fixed inset-0 bg-black/50 flex justify-end z-50"
    >
      <div
        className="w-full max-w-md bg-white h-full p-5 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center gap-2">
            <FaShoppingBag />
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <span>({item.length})</span>
          </div>

          <button onClick={() => setCartOpen(false)}>
            <RxCross2 size={22} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="mt-5 space-y-4">
          {item.length === 0 ? (
            <div className="text-center py-10">
              <FaShoppingBag className="mx-auto text-4xl mb-3" />
              <h3 className="text-lg font-semibold">
                Your cart is empty
              </h3>
            </div>
          ) : (
            item.map((item) => (
              <div
                key={item.product._id}
                className="border rounded-lg p-3"
              >
                <div className="flex gap-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {item.product.name}
                    </h3>

                    <p className="text-gray-600">
                      ${item.product.price.toFixed(2)}{" "}
                      {item.product.unit}
                    </p>

                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product._id,
                            item.quantity - 1
                          )
                        }
                      >
                        <HiMinus />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product._id,
                            item.quantity + 1
                          )
                        }
                      >
                        <HiPlus />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-end">
                    <button
                      onClick={() =>
                        removeFromCart(item.product._id)
                      }
                    >
                      <RxCross2 />
                    </button>

                    <span className="font-semibold">
                      $
                      {(
                        item.product.price * item.quantity
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {item.length > 0 && (
          <div className="border-t mt-6 pt-5 space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <span>Grand Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>

            <button
              className="w-full bg-green-600 text-white py-3 rounded-lg flex justify-center items-center gap-2"
              onClick={() => setCartOpen(false)}
            >
              Proceed to Checkout
              <FaArrowRightLong />
            </button>

            <button
              className="w-full border py-3 rounded-lg"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;