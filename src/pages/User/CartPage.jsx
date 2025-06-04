import Main from "../../components/Main";
import Section from "../../components/Section";
import React, { useState, useEffect } from "react";
import dummyImg from "../../assets/dummy-img.png";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";

export default function CartPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const userId = localStorage.getItem("user_id");

  const handlePaymentClick = (price, course, author, id) => {
    setSelectedPrice(price);
    setSelectedCourse(course);
    setSelectedAuthor(author);
    setSelectedId(id);
    setShowModal(true);
  };

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const { data: cartItems, error } = await supabase
        .from("cart")
        .select(
          `
    id,
    added_at,
    courses (
      id,
      title,
      rating,
      price,
      instructor,
      duration,
      students,
      description,
      thumbnail,
      features
    )
  `
        )
        .eq("user_id", userId);

      if (error) {
        console.error("Error fetching cart items:", error);
      } else {
        console.log("Cart courses:", cartItems);
        setCourses(cartItems.map(item => item.courses));
      }
    }
    fetchCourses();
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [showModal]);

  const navigate = useNavigate();

  const handlePayment = async () => {
    if (!userId || !selectedId) {
      alert('User or course not selected');
      return;
    }

  // Insert into purchases table
  const { data: purchaseData, error: purchaseError } = await supabase
    .from('purchases')
    .insert([
      {
        user_id: userId,
        course_id: selectedId,
      }
    ]);

  if (purchaseError) {
    console.error('Payment failed:', purchaseError);
    alert('Payment failed, please try again.');
    return;
  }

const { error: cartDeleteError } = await supabase
    .from('cart')
    .delete()
    .match({ user_id: userId, course_id: selectedId });

  if (cartDeleteError) {
    console.warn('Failed to remove course from cart:', cartDeleteError);
    alert('Payment successful, but failed to remove course from cart.');
  } else {
    alert('Payment successful! Course added to your purchases and removed from cart.');
  }
  setShowModal(false);
  navigate("/my-courses");

    // if (window.snap) {
    //   window.snap.pay("f126f3c8-14aa-4914-bd1d-ad1f3edda04c", {
    //     onSuccess: (result) => {
    //       console.log("Success:", result);
    //       navigate("/");
    //     },
    //     onPending: (result) => {
    //       console.log("Pending:", result);
    //       navigate("/cart");
    //     },
    //     onError: (result) => {
    //       console.error("Error:", result);
    //     },
    //     onClose: () => {
    //       alert("Transaksi dibatalkan.");
    //     },
    //   });
    // } else {
    //   alert("Snap belum dimuat.");
    // }
  };

  return (
    <Main>
      <Section>
        <div className="py-4 px-4 mx-auto max-w-screen-xl">
          <h2 className="text-4xl font-semibold">
            Cart
          </h2>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="shadow shadow-white bg-white rounded-xl overflow-hidden flex flex-col"
            >
              <img
                src={course.thumbnail}
                alt="course"
                className="object-cover w-full h-48"
              />

              <div className="px-4 pt-4 flex items-center gap-3">
                <img
                  src={`https://i.pravatar.cc/40?img=${index + 3}`}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-sm font-semibold text-gray-800">
                  {course.instructor}
                </p>
              </div>

              <div className="p-4 flex flex-col gap-y-2 text-black">
                <p className="text-base font-bold">{course.title}</p>
                <p className="text-sm font-medium text-gray-700">8/10</p>
                <p className="text-base font-bold text-green-600">
                  {course.price.toLocaleString()}
                </p>
              </div>

              <div className="w-full h-10 bg-sky-500/50 font-bold text-black flex items-center justify-center">
                Unlimited Access
              </div>

              <div className="p-4 flex flex-col gap-y-2 text-black">
                <ul>
                  <li className="text-sm">
                    - Lifetime Access for all material
                  </li>
                  <li className="text-sm">- Downloadable Resources</li>
                </ul>
              </div>

              <div className="w-full flex items-center justify-end">
                <button
                  onClick={() =>
                    handlePaymentClick(
                      course.price,
                      course.title,
                      course.author,
                      course.id
                    )
                  }
                  className="w-1/2 text-black text-sm bg-sky-500/50 rounded-sm m-4 p-2"
                >
                  Checkout →
                </button>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-80 shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-gray-800">
                Payment Detail
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div>
                  <span className="font-semibold">Course:</span>{" "}
                  <span>{selectedCourse}</span>
                </div>
                <div>
                  <span className="font-semibold">Author:</span>{" "}
                  <span>{selectedAuthor}</span>
                </div>
                <hr className="mb-4" />
                <div className="flex justify-between">
                  <span>Harga Course:</span>
                  <span>{selectedPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fee Transaksi:</span>
                  <span>Rp5,000</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>{(selectedPrice).toLocaleString()} + Rp5,000</span>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-sm rounded hover:bg-gray-400"
                >
                  Close
                </button>
                <button
                  onClick={() => handlePayment(selectedId)}
                  className="px-4 py-2 bg-sky-500 text-white text-sm rounded hover:bg-sky-600"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        )}
      </Section>
    </Main>
  );
}
