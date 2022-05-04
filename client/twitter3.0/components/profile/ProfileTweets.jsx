import Post from '../Post'

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

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}


function ProfileTweets() {
    return (
        <div className={style.wrapper}>
            {tweets.map((tweet, index) => (
                <Post
                    key={index}
                    displayName='Siva'
                    username={`${tweet.username.slice(1, 4)}...${tweet.username.slice(-4)}`}
                    avatar={tweet.avatar}
                    text={tweet.text}
                    isProfileImageNft={tweet.isProfileImageNft}
                    timestamp={tweet.timestamp}
                />
            ))}
        </div>
    );
}

export default ProfileTweets;