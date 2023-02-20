import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PromoBlock from "../../components/PromoBlock/PromoBlock";
import SpeakersList from "../../components/Speakers/SpeakersList";
import { fetchSpeakers } from "../../store/actions/speakersActions";

export const MainPage = () => {
  const { speakers } = useSelector(state => state.speakers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSpeakers())
  }, [dispatch])

  return (
    <>
      <PromoBlock />
      <SpeakersList
        speakers={speakers}
      />
    </>
  )
};

export default MainPage
