import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox';
import Post from "../Post"
const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d]`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayname: "Siva",
        username: '0x62f6B9D5d1c74c9952FFED81EC1537A07131982F',
        avatar: 'https://wallpapercave.com/wp/wp1880364.jpg',
        text: 'Hey!there',
        isProfileImageNft: false,
        timestamp: '2020-03-30'
    },
    {
        displayname: "Siva",
        username: '0x62f6B9D5d1c74c9952FFED81EC1537A07131982F',
        avatar: 'https://wallpapercave.com/wp/wp1880364.jpg',
        text: 'Hey!there',
        isProfileImageNft: false,
        timestamp: '2020-03-30'
    },
    {
        displayname: "Siva",
        username: '0x62f6B9D5d1c74c9952FFED81EC1537A07131982F',
        avatar: 'https://wallpapercave.com/wp/wp1880364.jpg',
        text: 'Hey!there',
        isProfileImageNft: false,
        timestamp: '2020-03-30'
    }
]

function Feed() {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />
            </div>
            <TweetBox />
            {tweets.map((tweet, index) => (
                < Post
                    key={index}
                    displayName={tweet.displayname}
                    username={`${tweet.username.slice(1, 4)}...${tweet.username - 4}`}
                    avatar={tweet.avatar}
                    text={tweet.text}
                    isProfileImageNft={tweet.isProfileImageNft}
                    timestamp={tweet.timestamp}
                />
            ))}
        </div>
    );
}

export default Feed;