import React, { useEffect } from 'react';
import './Overview.scss';
import spinner from './Spinner.svg'

const Overview = ({
  devices,
  availability,
  setSidebarData,
  loadingDevices,
  loadingAvailability,
  loadDevices,
  checkAvailability
}) => {

  useEffect(() => {
    const refreshAvialability = setInterval(() => checkAvailability(), 10000);
    loadDevices()
      .then(checkAvailability());

      return () => {
        clearInterval(refreshAvialability)
      }
  }, [])

  return (
    <div className="overview">
      {
        !loadingDevices ?
          devices.map(device => (
            <div 
              key={device.compositeId}
              onClick={() => setSidebarData(device)}
              className="overview__item"
            >
              <h2>{device.name}</h2>
              <h4>
                {
                  !loadingAvailability ? (
                    availability[device.descriptorId] ? 
                    <span className="overview__avialable">
                      Avialable
                    </span> :
                    <span className="overview__not-avialable">
                      Not Avialable
                    </span>
                  ) :
                  <img src={spinner} alt="" className="spiner" />
                }
              </h4>
            </div>
          )) :
            <img src={spinner} alt="" className="spiner" />
      }

    </div>
  )
}

Overview.propTypes = {};

export default Overview;
