import React from 'react'


export default function SnapStat(props) {
    const getStats = () => {

        return Object.entries(props.stats)
            .filter(([key, value]) => key !== 'link')
            .map(([key, value]) => {
                return (
                    <div className="Stat" key={key}>
                        <div className='StatValue' >{value.toLocaleString().replace(',', ' ') }</div>
                        <img src='/snap-1.svg' alt='snap-icon' />
                        <span className='StatName' > { key.toUpperCase() } </span>
                    </div>
                )
            })
    }

    return (
        <div key={props.link} style={{ display : 'flex' }}>
            { getStats()}
        </div>
    )
}
