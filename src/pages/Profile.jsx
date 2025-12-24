import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

const Profile = () => {
    const { user, updateUser } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        address: user?.address || "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateUser(formData);
            toast.success("Profile updated successfully!");
            setIsEditing(false);
        } catch (error) {
            toast.error("Failed to update profile.");
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return <div className="text-center py-20">Please login to view profile.</div>;
    }

    return (
        <div className="container py-14 min-h-[60vh] dark:text-white">
            <h1 className="text-3xl font-bold mb-10 text-center">My Profile</h1>

            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="bg-gradient-to-r from-primary to-secondary h-32"></div>
                <div className="px-8 pb-8">
                    <div className="relative -mt-16 mb-6 flex justify-between items-end">
                        <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-500 overflow-hidden shadow-lg">
                            {user.name?.charAt(0).toUpperCase()}
                        </div>
                        {!isEditing && (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors shadow-md"
                            >
                                Edit Profile
                            </button>
                        )}
                    </div>

                    {isEditing ? (
                        <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 focus:ring-2 focus:ring-primary outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        disabled
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700/30 cursor-not-allowed opacity-70"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 focus:ring-2 focus:ring-primary outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="123, Main Street, City"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 focus:ring-2 focus:ring-primary outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-primary text-white px-8 py-2 rounded-lg hover:bg-secondary transition-colors shadow-md disabled:opacity-70"
                                >
                                    {loading ? "Saving..." : "Save Changes"}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="space-y-6 animate-fadeIn">
                            <div>
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    {user.name}
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400">Member since {new Date(user.id || Date.now()).toLocaleDateString()}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/30 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                        <p className="font-medium">{user.email}</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/30 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                        <p className="font-medium">{user.phone || "Not added"}</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/30 flex items-center gap-4 md:col-span-2">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                        <FaLocationDot />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                                        <p className="font-medium">{user.address || "Not added"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
