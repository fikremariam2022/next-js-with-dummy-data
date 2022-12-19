import { useRouter } from "next/router";
import MeetupDetail from "../../components/MeetupDetail";

function DetailPage() {
  const router = useRouter();
  const newsId = router.query.meetupId;
  alert(newsId);
  return <MeetupDetail id={newsId} />;
}
export default DetailPage;
