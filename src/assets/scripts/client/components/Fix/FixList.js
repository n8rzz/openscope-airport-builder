import React, { Component } from 'react';

export default class Fix extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h3>List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ASDAK</td>
                            <td>50.602222</td>
                            <td>6.251944</td>
                        </tr>
                        <tr>
                            <td>ASPIX</td>
                            <td>50.485361</td>
                            <td>5.416583</td>
                        </tr>
                        <tr>
                            <td>BABUV</td>
                            <td>51.160494</td>
                            <td>6.738392</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
