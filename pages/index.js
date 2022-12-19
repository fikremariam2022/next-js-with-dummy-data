import MeetupList from "../components/MeetupList";
import { MEETUPS_DUMMY } from "../data";
export default function NewsPage() {
  return <MeetupList meetups={MEETUPS_DUMMY} />;
}
