import { FaTwitter, FaReddit, FaTelegramPlane } from "react-icons/fa";
import ExpandableText from "./common/ExpandableText";

export default function SocialInformation({ info, setInfo }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-50 overflow-auto">
            <span
                className="bg-red-700 inline-block font-bold text-white 
          w-8 h-8 text-[1.5rem] text-center mt-8 ml-8 rounded-md cursor-pointer 
          transition-all duration-300 transform hover:scale-110 shadow-lg"
                onClick={() => setInfo(null)}
            >
                ×
            </span>
            <div className="flex justify-center items-center mt-10">
                <div className="w-full max-w-4xl p-4 bg-[#18181ce6] border border-zinc-700 rounded-2xl shadow-2xl text-white max-h-[80vh] overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center text-cyan-500">
                        Social Information - {info?.name}
                    </h2>

                    <div className="my-3">
                        <ExpandableText text={info?.description?.en} maxChars={600} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[1rem] leading-7">
                        <div className="flex items-center gap-2">
                            <FaTwitter className="text-sky-400 text-xl" />
                            <span className="font-semibold">Twitter Followers:</span>
                            <span>{info?.community_data?.twitter_followers?.toLocaleString() || "N/A"}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaReddit className="text-orange-500 text-xl" />
                            <span className="font-semibold">Reddit Avg Comments (48h):</span>
                            <span>{info?.community_data?.reddit_average_comments_48h || "N/A"}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaReddit className="text-orange-500 text-xl" />
                            <span className="font-semibold">Reddit Avg Upvotes (48h):</span>
                            <span>{info?.community_data?.reddit_average_upvotes_48h || "N/A"}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaReddit className="text-orange-500 text-xl" />
                            <span className="font-semibold">Reddit Active Users:</span>
                            <span>{info?.community_data?.reddit_active_users_48h || "N/A"}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaTelegramPlane className="text-blue-400 text-xl" />
                            <span className="font-semibold">Telegram Users:</span>
                            <span>{info?.community_data?.telegram_channel_user_count || "N/A"}</span>
                        </div>
                    </div>

                    {/* Useful Links Section */}
                    <div className="my-6">
                        <h3 className="text-xl font-semibold mb-4 text-center">Useful Links</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {info?.links?.homepage?.map((link, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <a
                                        href={link || "#"}
                                        className="text-blue-400 font-semibold hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Homepage Link
                                    </a>
                                    <span className="text-sm text-gray-500">Visit Homepage</span>
                                </div>
                            ))}
                            {info?.links?.blockchain_site?.map((link, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <a
                                        href={link || "#"}
                                        className="text-blue-400 font-semibold hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Blockchain Link {index + 1}
                                    </a>
                                    <span className="text-sm text-gray-500">Explore Blockchain</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
