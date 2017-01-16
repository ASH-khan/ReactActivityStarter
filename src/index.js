import React, {Component} from 'react'
import { render } from 'react-dom'
import {SkiDayList} from './components/SkiDayList'
import {SkiDayCount} from './components/SkiDayCount'

window.React = React


render (
    <SkiDayCount />,
    document.getElementById('react-container')
)

// render(
//     <SkiDayList days={
//         [
//             {
//                 resort: 'Squaw Valley',
//                 date: new Date("01/17/2017"),
//                 powder: true,
//                 backcountry: false
//             },
//             {
//                 resort: 'Tahoe Cali',
//                 date: new Date("01/01/2017"),
//                 powder: false,
//                 backcountry: false
//             },
//             {
//                 resort: 'Reno Cali',
//                 date: new Date("01/10/2017"),
//                 powder: false,
//                 backcountry: true
//             }
//         ]
//     }/>,
// 	document.getElementById('react-container')
// )