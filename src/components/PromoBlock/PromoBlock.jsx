import Button from '../UI/Button/Button';
import './PromoBlock.scss'

export const PromoBlock = () => {

  return (
    <div className='promo_bg'>

      <div className='promo container'>
        <h1 className='promo_title'>Форум Microsoft
          <span className='promo_title promo_title_br'>
            «Finance industry trust in AI and IT-Security»
          </span>
        </h1>
        <p className='promo_subtitle'>
          Масштабная кибератака и устаревшее оборудование может привести к потере клиентов, ухудшить отношения с партнёрами и учредителями, а невыполнение требований законодательства может привести к существенным штрафам и даже к блокировке ресурсов
        </p>
        <p className='promo_info'>
          Узнайте как этого избежать, регистрируйтесь на наш форум
        </p>
        <div className='promo_block_btn'>
          <Button>Регистрация</Button>
        </div>
        <div className='promo_under_img'></div>
      </div>
    </div>
  )
};

export default PromoBlock
