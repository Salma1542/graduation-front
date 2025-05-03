import { useState, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import profileimage from '../../assets/OIP (1).jpg';
import Comment from "../Home/comment";  // تأكد من أن المسار صحيح

export default function SavePosts() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // استرجاع المنشورات المفضلة من localStorage عند تحميل الصفحة
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    return (
        <div className="max-w-screen-lg mx-auto p-4">  {/* لضبط عرض الحاوية إلى 75% */}
            <h2 className="text-xl text-[#8B4513] font-semibold mb-4">المنشورات المفضلة</h2>
            {favorites.length === 0 ? (
                <p>لا توجد منشورات مفضلة بعد.</p>
            ) : (
                favorites.map((post) => (
                    <div key={post.id} className="post-card bg-white rounded shadow-md mb-6 p-4">
                        <div className="post-header flex items-center mb-3">
                            <img
                                src={post.userProfilePicture || profileimage}
                                className="w-10 h-10 border-2 border-red-900 rounded-full"
                            />
                            <div className="post-author-info mt-2 mr-3 flex-1">
                                <h3 className="post-author-name font-normal text-[#5C4033] text-lg">
                                    {post.nameOfUser}
                                </h3>
                                <p className="post-time text-gray-500 text-xs mt-1">{post.timeAgo}</p>
                            </div>
                        </div>

                        <div className="post-content mb-3 text-base leading-relaxed">
                            <p className="whitespace-pre-line">{post.content}</p>
                            {post.imageURL?.length > 0 && (
                                <div className="post-img-container mb-3 rounded overflow-hidden h-96">
                                    <img
                                        src={post.imageURL[0]}
                                        alt="صورة المنشور"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                        </div>

                        <Comment post={post} />
                    </div>
                ))
            )}
        </div>
    );
}
