import {Component} from 'react'
import {SkiDayList} from './SkiDayList'
import {SkiDayCount} from './SkiDayCount'

export class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            allSkiDays: [
                {
                    resort: 'Squaw Valley',
                    date: new Date("01/17/2017"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: 'Tahoe Cali',
                    date: new Date("01/01/2017"),
                    powder: false,
                    backcountry: false
                },
                {
                    resort: 'Reno Cali',
                    date: new Date("01/10/2017"),
                    powder: false,
                    backcountry: true
                }
            ]
        }

    }

    countDays (filter) {
        const {allSkiDays} = this.state
        return allSkiDays.filter((day) => (filter) ? day[filter] : day).length
    }
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
}