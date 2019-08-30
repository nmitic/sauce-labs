import { connect } from 'react-redux';
import Overview from '../../components/Overview/Overview'

import { 
  loadDevices,
  isDeviceLoadingSelector,
  devicesSelector
 } from '../../modules/devices';

import { 
  checkAvailability,
  isAvailabilityLoadingSelector,
  AvailabilitySelector
} from '../../modules/availability';

import { setSidebarData } from '../../modules/sidebar';


const mapStateToProps = state => ({
  devices: devicesSelector(state),
  availability: AvailabilitySelector(state),
  loadingDevices: isDeviceLoadingSelector(state),
  loadingAvailability: isAvailabilityLoadingSelector(state)
});

const mapDispatchToProps = {
  loadDevices,
  checkAvailability,
  setSidebarData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview)
