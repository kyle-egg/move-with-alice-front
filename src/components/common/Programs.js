import React from 'react'
import { getAllPrograms } from '../../lib/api'

function Programs() {
  const [Programs, setPrograms] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllPrograms()
      setPrograms(res.data)
    }
    getData()
    
  }, [ ])

  console.log(Programs)

  return (
    <section>
      <div id="homehero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" >
        <div className="homecontainer">
          <div id="elevate" className="uk-background-cover uk-height-full uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <img className="logohome"></img>
            <h3 id="abouttitle"className="uk-text-lead">Programs</h3>
            <br></br>
            <p className="paratext">Blah blah blah
            </p>
          </div>
        </div>     
      </div>
    </section>
  )
}
export default Programs