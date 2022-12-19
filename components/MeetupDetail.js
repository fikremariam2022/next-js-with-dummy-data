import { MEETUPS_DUMMY } from "../data";
import detailClasses from "../styles/MeetupDetail.module.css";
import Image from "next/image";
const MeetupDetail = ({ id }) => {
  const { title, imgUrl, content } = MEETUPS_DUMMY.find(
    (item) => item.id === parseInt(id)
  );
  console.log(title, imgUrl, content);
  return (
    <div className={detailClasses.container}>
      <h1>{title}</h1>
      <Image src={imgUrl} alt="image of the news" width="700" height="400" />
      <p>{content}</p>
    </div>
  );
};

export default MeetupDetail;
