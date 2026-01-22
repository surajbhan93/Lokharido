"use client";
import { useState } from "react";

export default function AddAddressModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="p-6 border-b flex justify-between items-center bg-gray-50">
          <h3 className="text-lg font-bold">Add New Address</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-black text-2xl">&times;</button>
        </div>
        
        <form className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="border p-3 rounded-xl w-full outline-none focus:ring-2 focus:ring-yellow-400" />
            <input type="text" placeholder="Mobile Number" className="border p-3 rounded-xl w-full outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <input type="text" placeholder="Pincode" className="border p-3 rounded-xl w-full outline-none focus:ring-2 focus:ring-yellow-400" />
          <textarea placeholder="Full Address (House No, Building, Street)" className="border p-3 rounded-xl w-full h-24 outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
          
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="type" defaultChecked /> <span className="text-sm">Home</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="type" /> <span className="text-sm">Office</span>
            </label>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition">
            SAVE ADDRESS
          </button>
        </form>
      </div>
    </div>
  );
}