import { Image } from "./image";
import './gallery.css';

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <br/>
          <br/>
          <h2>GALLERY</h2>
          <br/>
        </div>
        <div className='row gallery'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4 gallery-item'>
                <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
              </div>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  );
};
