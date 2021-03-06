/**
 * Created by ishi on 1/16/17.
 */
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import {PropTypes} from 'react'

export const SkiDayRow = ({resort, date, backcountry, powder}) => (

   <tr>
       <td>
           {date}
       </td>
       <td>
           {resort}
       </td>
       <td>
           {(powder) ? <SnowFlake /> : null}
       </td>
       <td>
           {(backcountry) ? <Terrain /> : null}
       </td>
   </tr>
)

SkiDayRow.propTypes = {
       date: PropTypes.string.isRequired,
       resort: PropTypes.string.isRequired,
       powder: PropTypes.bool,
       backcountry: PropTypes.bool
}


