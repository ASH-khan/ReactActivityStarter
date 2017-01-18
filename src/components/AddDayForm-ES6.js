/**
 * Created by ishi on 1/17/17.
 */
import { Component, PropTypes } from 'react'

export class AddDayForm extends Component {

    constructor(props) {
        super(props)

        this.submit = this.submit.bind(this)

    }
    submit (e) {
        e.preventDefault()
        console.log('resort', this.refs.resort.value)
        console.log('date', this.refs.date.value)
        console.log('powder', this.refs.powder.checked)
        console.log('backcountry', this.refs.backcountry.checked)
    }

    render () {
        const { resort, powder, date, backcountry } = this.props
        return (
			<form onSubmit={ this.submit } action="" className="add-day-form">
				<lebel htmlFor="resort">Resort Name</lebel>
				<input id="resort"
					   type="text"
					   required
					   defaultValue={resort}
					   ref="resort"/>

				<lebel htmlFor="date">Date</lebel>
				<input id="date"
					   type="date"
					   required
					   defaultValue={date}
					   ref="date"/>

				<div>
					<input id="powder"
						   type="checkbox"
						   defaultChecked={powder}
						   ref="powder"/>
					<lebel htmlFor="powder">Powder Day: </lebel>
				</div>
				<div>
					<input id="backcountry"
						   type="checkbox"
						   defaultChecked={backcountry}
						   ref="backcountry"/>
					<lebel htmlFor="backcountry">Backcountry Day: </lebel>

				</div>
				<button>Add Day</button>
			</form>
        )
    }
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
