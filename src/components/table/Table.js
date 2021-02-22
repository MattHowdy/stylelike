import React from 'react'
import ContainerTitle from '../ui/ContainerTitle'


const getData = (data) => {

    if (Object.keys(data).length) {
        return data.map(item => {
            return (<tr key={item.id}>
                <td>{item.user.screen_name}</td>
                <td>{item.text}</td>
                <td>{window.formatDate(item.created_at)}</td>
            </tr>)
        })
    }
}

export default function Table(props) {
    console.log();
    return (
        <div>
            <ContainerTitle text="UX Hastags" />
            <div className='TableContainer'style={{ padding: '20px', backgroundColor: 'white' }}>
                <table className="Table">
                    <thead>
                        <tr>
                            <th style={{ width: '20%' }}>User</th>
                            <th >Text</th>
                            <th style={{ width: '20%' }}>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getData(props.data)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
