import 'antd/dist/antd.css';
import React, { useState } from 'react'
import ContainerTitle from '../../ui/ContainerTitle';
import WeeklyStat from './WeeklyStat';
import MonthlyStat from './MonthlyStat';
import { WEEKLY, MONTHLY } from '../../../helpers/constants'
import { Select } from 'antd';
import JumboPrimaryButton from '../../ui/buttons/JumboPrimaryButton';
import JumboSecondaryButton from '../../ui/buttons/JumboSecondaryButton';
const { Option } = Select;


export default function StatisticsContainer(props) {
  const [activeTab, setActivetab] = useState('weekly')
  const changeContent = (tabName) => setActivetab(tabName)

  const getTabs = () => {
    const tabs = [WEEKLY, MONTHLY]
    return tabs.map(tab => <div key={tab} className={activeTab === tab ? "Tablinks active" : "Tablinks"} onClick={() => changeContent(tab)}>{window.capitalize(tab)}</div>)
  }

  const getActiveTab = () => {
    if (activeTab === MONTHLY) {
      return <MonthlyStat />
    }
    return <WeeklyStat />
  }


  const getSelector = () => {
    return (<Select defaultValue={props.campaigns[0]} style={{ width: '50%', maxWidth: '300px' }} onChange={handleChange}>
      { props.campaigns.map(campaing => <Option key={campaing} value={campaing}>{campaing}</Option>)}
    </Select>)
  }

  const getButtons = () => {
    const secondaryBtns = [
      { value: 1212, social: 'insta', name: 'likes' },
      { value: 23235, social: 'snap', name: 'snaps' },
      { value: 312, social: 'snap', name: 'opens' }
    ]
    const buttons = [<JumboPrimaryButton value='123' social='insta' name='posts' />]
    secondaryBtns.forEach(element => {
      buttons.push(<JumboSecondaryButton value={element.value} social={element.social} name={element.name} />)
    })

    return buttons

  }

  function handleChange(value) {
    // TODO:
    // change data according to campaings
  }

  return (
    <div className='StatisticsContainer'>
      <ContainerTitle text='Statistics overview' />

      <div className='Statistics'>
        <div className="Tabs" style={{ display: 'flex' }}>
          {getTabs()}
        </div>

        <div style={{ marginLeft: '10px', marginTop: '10px' }}>
          Choose campaign
          {getSelector()}
        </div>

        {getActiveTab()}

        <div className='Buttons'>
          {getButtons()}
        </div>
      </div>
    </div>
  )
}
