import React from 'react';


function Classes() {
    return (
        <div className='sectionPage'>
            <h3>Monday</h3>
            <table cellPadding="5" border="1">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Class Type</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tr><td rowspan="5">
                    St Cyres secondary school<br/>
                    Sully Road<br />
                    Penarth<br />
                    CF64 2PX<br />

                    Location: main hall.<br />
                </td>
                    </tr>

                <tr><td>Mixed ability all ages family class</td><td>6.30pm - 7.30pm</td></tr>

                <tr><td>Adults and Senior members</td><td>7.30pm - 8.30pm</td></tr>
            </table>

            <h3>Tuesday</h3>
            <table cellPadding="5" border="1">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Class Type</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tr>
                    <td>Litchard primary school</td> 
                    <td>All ages, family class.</td>
                    <td>4.15pm - 5.15pm</td>
                </tr>
            </table>

            <h3>Wednesday</h3>
            <table cellPadding="5" border="1">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Class Type</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tr><td rowspan="5">
                    LLandough war Memorial Hall<br/>
                    31 Penlan Road<br />
                    Llandough<br />
                    CF64 2LT<br />
                </td></tr>
                <tr><td>Tiny Tigers Age 3+</td><td>5pm - 5.45pm</td></tr>

                <tr><td>Dragons Nurture group Age 6+</td><td>5.45pm - 6.30pm</td></tr>

                <tr><td>Mixed family class all ages</td><td>6.30pm - 7.45pm</td></tr>

                <tr><td>Adults and senior members</td><td>7.45pm - 9pm</td></tr >
            </table>

            <h3>Friday</h3>
            <table cellPadding="5" border="1">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Class Type</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tr><td rowspan="5">
                    LLandough war Memorial Hall<br/>
                    31 Penlan Road<br />
                    Llandough<br />
                    CF64 2LT<br />
                </td></tr>
                <tr><td>Mixed family class all ages</td><td>6.30pm - 7.30pm</td ></tr >

                <tr><td>Ladies only</td><td>7.30pm - 8.30pm</td ></tr >
        </table>
        </div>
    );
}

export default Classes;