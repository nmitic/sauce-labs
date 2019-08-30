import { connect } from 'react-redux';

import { sidebarDataSelector } from '../../modules/sidebar';

import Sidebar from '../../components/Sidebar/Sidebar'

const mapStateToProps = state => ({
  deviceData: sidebarDataSelector(state)
});

export default connect(
  mapStateToProps
)(Sidebar)
