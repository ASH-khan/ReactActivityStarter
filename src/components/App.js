/**
 * Created by ishi on 1/16/17.
 */
import {createClass} from 'react'
import {SkiDayList} from './SkiDayList'
import {SkiDayCount} from './SkiDayCount'

export const App = createClass ({

    getInitialState() {
        return {
            allSkiDays: [
                {
                    resort: 'Squaw Valley',
                    date: new Date("2016-01-02"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: 'Tahoe Cali',
                    date: new Date("2016-01-02"),
                    powder: false,
                    backcountry: false
                },
                {
                    resort: 'Reno Cali',
                    date: new Date("2016-01-02"),
                    powder: false,
                    backcountry: true
                }
            ]
        }

    },

    countDays (filter) {
        const {allSkiDays} = this.state
        return allSkiDays.filter((day) => (filter) ? day[filter] : day).length
    },
    render () {
        return (
            <div className="app">
                <SkiDayList days={this.state.allSkiDays}/>
                <SkiDayCount total={this.countDays()}
                             powder={this.countDays("powder")}
                             backcountry={this.countDays("backcountry")}/>
            </div>

        )
    }
})