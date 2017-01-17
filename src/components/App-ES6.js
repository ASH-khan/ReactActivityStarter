import {Component} from 'react'
import {SkiDayList} from './SkiDayList'
import {SkiDayCount} from './SkiDayCount'
import {AddDayForm } from './AddDayForm'

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
                {(this.props.location.pathname === "/") ?
                    <SkiDayCount total={this.countDays()}
                                 powder={this.countDays("powder")}
                                 backcountry={this.countDays("backcountry")}/> :
                    (this.props.location.pathname === "/add-day") ?
                        <AddDayForm /> :
                        <SkiDayList days={this.state.allSkiDays}/>
                }
            </div>

        )
    }
}