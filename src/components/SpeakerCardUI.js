import React, { useRef } from "react"


function SpeakerCardUI({ id, first, last, company, twitterHandle, bio, sessions }) {
  const imageRef = useRef(null)
  return (
    <div className="ui card">
      <div className='image'>
        <img
          onMouseEnter={() => {
            try {
              require(`../../public/images/bw/speaker-${id}.jpg`)
              imageRef.current.src = `/images/bw/speaker-${id}.jpg`
            } catch {
              imageRef.current.src = `/images/speaker-${id}.jpg`
              console.log()
            }

          }}
          onMouseOut={() => {
            imageRef.current.src = `/images/speaker-${id}.jpg`
          }}
          ref={imageRef}
          alt=''
          src={`/images/speaker-${id}.jpg`}
        />
      </div>
      <div className='content'>
        <span className='header'>
          {first} - {last}
        </span>

        <div className='description'>{bio}</div>
        <div className='ui divider'></div>
        <div className='meta'>
          <span>
            <i className='twitter icon'></i>@{twitterHandle}
          </span>
        </div>

        <div className='ui divider'></div>
        <span>
          <i className='home icon'></i>
          {company}
        </span>
      </div>
      <div className='extra content'>
        <span href='#'>
          <i className='bullhorn icon'></i>
          {sessions.length}
        </span>
        {/* {sessions.map()} */}
      </div>
    </div>
  )
}

export default SpeakerCardUI;