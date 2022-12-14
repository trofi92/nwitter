import React,{ useState } from "react";

const Home = () => {
    const [nweet, setNweet] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
    };
    const onChange = (event) => {
        const { target: { value } } = event;
        setNweet(value);
    };

    return (
     <div>
        <form>
            <input
                type={nweet}
                onChange={onChange}
                placeholder="What's on your mind?"
                maxLength={120} />
            <input type="submit" value="Nweet" />
        </form>
    </div>
);
}
export default Home;