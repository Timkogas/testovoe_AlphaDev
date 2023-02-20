import SpeakersItem from './SpeakersItem/SpeakersItem';
import './SpeakersList.scss'



export const SpeakersList = ({ speakers, i }) => {

  return (
    <div className='speakers_bg'>
      <div className='speakers container'>
        <h2 className='speakers_title'>Спикеры нашего форума</h2>
        <div className='speakers_list'>
          {speakers.map((speaker, i) => {
            return (
              <SpeakersItem
                key={i}
                speaker={speaker}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default SpeakersList
