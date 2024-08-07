import './Dashboard.css';
import Card from '../cards/Card'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ActivityChart from '../chart/Activitychart';
import ShowCase from '../showcase/ShowCase';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import OrdersTable from '../table/OrdersTable';
import FeedbackCard from '../feedbackCard.jsx/FeedbackCard';
import NetProfitCard from '../netProfitCard/NetProfitCard';
const Dashboard = () => {
    return (
        <div className="dashboard">
            <h3 className='heading'>Dashboard</h3>
            <div className="dashboard-main">
                <div className="card-container">
                    <Card Icon={<ShoppingBasketIcon className='basket-icon' />}
                        bgColor={'rgba(0, 136, 255, 0.258)'}
                        value={'75'}
                        message={'Total Orders'}
                        percentage={3} />
                    <Card Icon={<ShoppingBagIcon className='delivered-icon' />}
                        bgColor={'#06965f3c'}
                        value={'70'}
                        message={'Total delivered'}
                        percentage={-3} />
                    <Card Icon={<ShoppingBagIcon className='cancelled-icon' />}
                        bgColor={'rgba(255, 0, 0, 0.142)'}
                        value={'05'}
                        message={'Total Cancelled'}
                        percentage={3} />
                    <Card Icon={<PriceChangeIcon className='revenue-icon' />}
                        bgColor={'rgba(255, 0, 195, 0.251)'}
                        value={'$12k'}
                        message={'Total Revenue'}
                        percentage={-3} />
                </div>
                <div className="net-profit">
                    <NetProfitCard />
                </div>
                <div className="chart">
                    <ActivityChart />
                </div>
                <div className="show-case">
                    <ShowCase
                        Icon={<ModeStandbyIcon className='target-icon' />}
                        bgColor={'rgba(255, 77, 0, 0.416)'}
                        message={'Goals'} />
                    <ShowCase
                        Icon={<LunchDiningIcon className='dish-icon' />}
                        bgColor={'rgba(0, 0, 255, 0.301)'}
                        message={'Papular Dishes'} />
                    <ShowCase
                        Icon={<RiceBowlIcon className='menu-icon' />}
                        bgColor={'rgba(4, 166, 194, 0.363)'}
                        message={'Menues'} />
                </div>
                <div className="recent-orders">
                    <OrdersTable />
                </div>
                <div className="feedbacks">
                    <h2 className="customer-feedback-heading">Customer's Feedback</h2>
                    <div className='feedback-container'>
                        <FeedbackCard
                            src={''}
                            name={'Sourabh Tyagi'}
                            rating={4}
                            message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem libero exercitationem incidunt, nisi corporis consequuntur veniam cupiditate quibusdam nobis quo fuga dicta necessitatibus architecto quae iste velit esse ut?'}
                        />
                        <FeedbackCard
                            src={''}
                            name={'Sachin'}
                            rating={5}
                            message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem libero exercitationem incidunt, nisi corporis consequuntur veniam cupiditate quibusdam nobis quo fuga dicta necessitatibus architecto quae iste velit esse ut?'}
                        />
                        <FeedbackCard
                            src={''}
                            name={'Sam'}
                            rating={4}
                            message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem libero exercitationem incidunt, nisi corporis consequuntur veniam cupiditate quibusdam nobis quo fuga dicta necessitatibus architecto quae iste velit esse ut?'}
                        />
                        <FeedbackCard
                            src={''}
                            name={'Vivek'}
                            rating={2}
                            message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem libero exercitationem incidunt, nisi corporis consequuntur veniam cupiditate quibusdam nobis quo fuga dicta necessitatibus architecto quae iste velit esse ut?'}
                        />
                        <FeedbackCard
                            src={''}
                            name={'Nishanky'}
                            rating={3}
                            message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem libero exercitationem incidunt, nisi corporis consequuntur veniam cupiditate quibusdam nobis quo fuga dicta necessitatibus architecto quae iste velit esse ut?'}
                        />
                        <FeedbackCard
                            src={''}
                            name={'Sourabh Tyagi'}
                            rating={4}
                            message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem libero exercitationem incidunt, nisi corporis consequuntur veniam cupiditate quibusdam nobis quo fuga dicta necessitatibus architecto quae iste velit esse ut?'}
                        />
                        <FeedbackCard
                            src={''}
                            name={'Sachin'}
                            rating={5}
                            message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem libero exercitationem incidunt, nisi corporis consequuntur veniam cupiditate quibusdam nobis quo fuga dicta necessitatibus architecto quae iste velit esse ut?'}
                        />
                        <FeedbackCard
                            src={''}
                            name={'Sam'}
                            rating={4}
                            message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem libero exercitationem incidunt, nisi corporis consequuntur veniam cupiditate quibusdam nobis quo fuga dicta necessitatibus architecto quae iste velit esse ut?'}
                        />
                        <FeedbackCard
                            src={''}
                            name={'Vivek'}
                            rating={2}
                            message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem libero exercitationem incidunt, nisi corporis consequuntur veniam cupiditate quibusdam nobis quo fuga dicta necessitatibus architecto quae iste velit esse ut?'}
                        />
                        <FeedbackCard
                            src={''}
                            name={'Nishanky'}
                            rating={3}
                            message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem libero exercitationem incidunt, nisi corporis consequuntur veniam cupiditate quibusdam nobis quo fuga dicta necessitatibus architecto quae iste velit esse ut?'}
                        />
                        <FeedbackCard
                            src={''}
                            name={'Sourabh Tyagi'}
                            rating={4}
                            message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem libero exercitationem incidunt, nisi corporis consequuntur veniam cupiditate quibusdam nobis quo fuga dicta necessitatibus architecto quae iste velit esse ut?'}
                        />
                        <FeedbackCard
                            src={''}
                            name={'Sachin'}
                            rating={5}
                            message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem libero exercitationem incidunt, nisi corporis consequuntur veniam cupiditate quibusdam nobis quo fuga dicta necessitatibus architecto quae iste velit esse ut?'}
                        />
                        <FeedbackCard
                            src={''}
                            name={'Sam'}
                            rating={4}
                            message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem libero exercitationem incidunt, nisi corporis consequuntur veniam cupiditate quibusdam nobis quo fuga dicta necessitatibus architecto quae iste velit esse ut?'}
                        />
                        <FeedbackCard
                            src={''}
                            name={'Vivek'}
                            rating={2}
                            message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem libero exercitationem incidunt, nisi corporis consequuntur veniam cupiditate quibusdam nobis quo fuga dicta necessitatibus architecto quae iste velit esse ut?'}
                        />
                        <FeedbackCard
                            src={''}
                            name={'Nishanky'}
                            rating={3}
                            message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem libero exercitationem incidunt, nisi corporis consequuntur veniam cupiditate quibusdam nobis quo fuga dicta necessitatibus architecto quae iste velit esse ut?'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;