/**
 * Created by ishi on 1/16/17.
 */
import terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import {SkiDayRow} from './SkiDayRow'
import {PropTypes} from 'react'

export const SkiDayList = ({days}) => (

    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>Backcountry</th>
            </tr>
        </thead>
        <tbody>

            {days.map((day, i) => {
                    return <SkiDayRow key={i}
                                      {...day} />
                })
            }
             {/*all this code is replaced by es6 spread operator {...day}*/}
             {/*resort={day.resort}*/}
             {/*date={day.date}*/}
             {/*powder={day.powder}*/}
             {/*backcountry={day.backcountry}*/}

        </tbody>
    </table>

)

SkiDayList.propTypes = {
    days: (props) => {
        if(!Array.isArray(props.days)) {
            return new Error (
                "SkiDayList should be an array!"
            )
        } else if(!props.days.length) {
            return new Error (
                "SkiDayList must have at least one item!"
            )

        } else {
            return null
        }
    }
}