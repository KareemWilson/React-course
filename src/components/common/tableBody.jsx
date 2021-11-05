import React, { Component } from 'react';

class TableBody extends React.Component {
    render() {
        const {data} = this.props 
        return(
            <tbody>
                {data.map(item => <tr>
                    <td></td>
                </tr> )}
                
            </tbody>
        );
    }
}
 
export default TableBody;