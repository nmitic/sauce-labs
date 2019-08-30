import { connect } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import { loadDevices } from '../../modules/devices';

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  loadDevices
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
