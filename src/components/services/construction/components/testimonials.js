import './testimonials.css'
export const Testimonials = (props) => {
  return (
    <div id='testimonials' style={{background:'#f6f6f6'}}>
      <div className='container'>
        <div className='section-title text-center'>
          <br/>
          <br/>
          <h2>WHAT OUR CLIENTS SAY
          </h2>
          <br/>
          <br/>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='testimonial-content'>
                      <p>"{d.text}"</p>
                      <div className='testimonial-meta'> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
