import React from 'react'
import { getAllExercises } from '../../lib/api'

function Exercises() {
  const [exercises, setExercises] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllExercises()
      setExercises(res.data)
    }
    getData()
    
  }, [ ])

  console.log(exercises)

  return (
    <section>
      <div id="homehero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div id="homeabout" className="uk-child-width-1-1@s" >
        <div className="homecontainer">
          <div id="elevate" className="uk-background-cover uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <h3 id="abouttitle"className="uk-text-lead">Exercises</h3>
            <img className="logohome"></img>
            <p className="paratext">Blah blah blah
            </p>
          </div>
        </div>     
      </div>
    </section>
  )
}
export default Exercises