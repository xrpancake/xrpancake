import Essentials from '@components/Essentials';
import DashboardScreen from '@screens/Dashboard';

const title = 'Dashboard';
const description = 'Earn Ripple (XRP) and PancakeSwap (Cake) every hour';

const DashboardPage = () => {
  return (
    <Essentials title={title} description={description}>
      <DashboardScreen />
    </Essentials>
  );
};

export default DashboardPage;
