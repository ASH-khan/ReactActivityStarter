/**
 * Created by ishi on 1/16/17.
 */
import { createClass, PropTypes} from 'react'
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

export const SkiDayCount = createClass ({
    // prop types use to validate properties.
    propTypes: {
        total: PropTypes.number.isRequired,
        powder: PropTypes.number.isRequired,
        backcountry: PropTypes.number.isRequired,
        goal: PropTypes.number.isRequired
    },

    getDefaultProps () {
        return {
                total: 50,
                powder: 20,
                backcountry: 14,
                goal: 100
            }

    },

    percentToDecimal(decimal) {
        return ((decimal * 100) + '%')
    },

    calcGoalProgress(total, goal){
        return this.percentToDecimal(total/goal)
    },

    render () {
        return (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{this.props.total}</span>
                    <Calendar />
                    <span>days</span>
                </div>
                <div className="powder-days">
                    <span>{this.props.powder}</span>
                    <SnowFlake />
                    <span>days</span>
                </div>
                <div className="backcountry-days">
                    <span>{this.props.backcountry}</span>
                    <Terrain />
                    <span>days</span>
                </div>
                <div>
                    <span>{this.calcGoalProgress(this.props.total, this.props.goal)}</span>
                </div>
            </div>
        )
    }

})
