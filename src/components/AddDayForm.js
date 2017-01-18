/**
 * Created by ishi on 1/17/17.
 */
import { PropTypes, Component} from 'react'

const tahoeResorts = [
    "Alphine Meadows",
    "Boreal",
    "Diamond Peak",
    "Donner Ski Ranch",
    "Heavenly",
    "Kirkwood",
    "Mt. Rose",
    "Northstar",
    "Squaw Valley",
    "Sugar Bowl"
]

class Autocomplete extends Component {

    get value() {
        return this.refs.inputResort.value
    }

    set value(inputValue) {
        this.refs.inputResort.value = inputValue
    }

    render () {
        return (
            <div>
                <input type="text" list="tahoe-resorts" ref="inputResort"/>
                <datalist id="tahoe-resorts">
                    {this.props.options.map(
                        (opt, i) => <option key={i}>{opt}</option>
                    )}
                </datalist>
            </div>
        )
    }
}

export const AddDayForm = ({ resort, powder, date, backcountry, onNewDay}) => {

    let _resort, _date, _powder, _backcountry
    const submit  = (e)  => {
        e.preventDefault()
        onNewDay({
            resort: _resort.value,
            date: _date.value,
            powder: _powder.checked,
            backcountry: _backcountry.checked
        })
        _resort.value = ''
        _date.value = ''
        _powder.checked = false
        _backcountry.checked= false

        console.log('resort', _resort.value)
        console.log('date', _date.value)
        console.log('powder', _powder.checked)
        console.log('backcountry', _backcountry.checked)
    }

    return (
        <form onSubmit={ submit } action="" className="add-day-form">
            <lebel htmlFor="resort">Resort Name</lebel>
            <Autocomplete options={tahoeResorts}
                   ref={input => _resort = input}/>

            <lebel htmlFor="date">Date</lebel>
            <input id="date"
                   type="date"
                   required
                   defaultValue={date}
                   ref={input => _date = input}/>

            <div>
                <input id="powder"
                       type="checkbox"
                       defaultChecked={powder}
                       ref={input => _powder = input}/>
                <lebel htmlFor="powder">Powder Day: </lebel>
            </div>
            <div>
                <input id="backcountry"
                       type="checkbox"
                       defaultChecked={backcountry}
                       ref={input => _backcountry = input}/>
                <lebel htmlFor="backcountry">Backcountry Day: </lebel>

            </div>
            <button>Add Day</button>
        </form>
    )
}

AddDayForm.defaultProps = {
    resort: "Kirkwood",
    date: "2017-02-12",
    powder: true,
    backcountry: false
}

AddDayForm.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}
