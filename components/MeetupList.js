import MeetupItem from "./MeetupItem";
import container from "../styles/MeetupList.module.css";
const MeetupList = ({ meetups }) => {
  return (
    <div className={container.grid}>
      {meetups.map((meetup) => {
        return <MeetupItem {...meetup} />;
      })}
    </div>
  );
};

export default MeetupList;
