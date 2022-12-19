import newMeetupStyle from "../styles/NewMeetupForm.module.css";
import { useState } from "react";
import { MEETUPS_DUMMY } from "../data";
import { useRouter } from "next/router";
const NewMeetupForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, imgUrl, content);
    router.push("/");
  };
  return (
    <div className={newMeetupStyle.form}>
      <label>Meetup Title:</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />

      <label>URL for image:</label>
      <input
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
        type="text"
      />

      <label>Content:</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        type="text"
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default NewMeetupForm;
