import { Link } from 'react-router-dom';
import './SpeakersItem.scss'



export const SpeakersItem = ({speaker}) => {

  return (
    <div className='speaker_item'>
      <img src={speaker.photo_url} alt='speaker' className='speaker_item_img'/>
      <p className='speaker_item_name'>{speaker.name}</p>
      <div className='speaker_item_hr'></div>
      <p className='speaker_item_info'>{speaker.description}</p>
      <Link to='/' className='speaker_item_more'>Подробнее</Link>
    </div>
  )
};

export default SpeakersItem