import React, { Fragment } from 'react';
import './sidebar.scss';

const Sidebar = ({deviceData}) => {

  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        {deviceData ? 
          <Fragment>
            { deviceData.descriptorId && 
              <img alt="" src={`https://d3ty40hendov17.cloudfront.net/device-pictures/${deviceData.descriptorId}.png`} />
            }
            <h1>{deviceData.name}</h1>
            <div className="sidebar__info">
              OS: {deviceData.os}
            </div>
            <div className="sidebar__info">
              OS Version: {deviceData.osVersion}
            </div>
            <div className="sidebar__info">
              Ram Size: {deviceData.ramSize}
            </div>
            <div className="sidebar__info">
              Cpu Type: {deviceData.cpuType}
            </div>
            <div className="sidebar__info">
              Cpu cores: {deviceData.cpuCores}
            </div>
            <div className="sidebar__info">
              cpu frequency:  {deviceData.cpuFrequency }
            </div>
          </Fragment>
          :
          <Fragment>
            <h3>Please select device for details...</h3>
          </Fragment>
        }
      </div>
    </aside>
  )
}

Sidebar.propTypes = {};

export default Sidebar;
