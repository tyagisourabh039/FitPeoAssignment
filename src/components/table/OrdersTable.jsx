import './OrdersTable.css'
import { Avatar } from '@mui/material';
const OrdersTable = () => {
  return (
    <>
      <div className="table-header">
        <h2 className="table-name">Recent Orders</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className='customer'>
                <Avatar src="/broken-image.jpg" />
                <p className='customer-name' >Sourabh Tyagi</p>
              </div>
            </td>
            <td>15478256</td>
            <td>$124.00</td>
            <td><div className='delivered'>Delivered</div></td>
          </tr>
          <tr>
            <td>
              <div className='customer'>
                <Avatar src="/broken-image.jpg" />
                <p className='customer-name' >Rishav Kumar</p>
              </div>
            </td>
            <td>48965786</td>
            <td>$365.02</td>
            <td><div className='delivered'>Delivered</div></td>
          </tr>
          <tr>
            <td>
              <div className='customer'>
                <Avatar src="/broken-image.jpg" />
                <p className='customer-name' >Nikhil Patankar</p>
              </div>
            </td>
            <td>78958215</td>
            <td>$45.88</td>
            <td><div className='cancelled'>Cancelled</div></td>
          </tr>
          <tr>
            <td>
              <div className='customer'>
                <Avatar src="/broken-image.jpg" />
                <p className='customer-name' >Navneesh Yadav</p>
              </div>
            </td>
            <td>20965732</td>
            <td>$65.00</td>
            <td><div className='pending'>Pending</div></td>
          </tr>
          <tr>
            <td>
              <div className='customer'>
                <Avatar src="/broken-image.jpg" />
                <p className='customer-name' >Sumit Kumar</p>
              </div>
            </td>
            <td>95715620</td>
            <td>$545.00</td>
            <td><div className='delivered'>Delivered</div></td>
          </tr>
          <tr>
            <td>
              <div className='customer'>
                <Avatar src="/broken-image.jpg" />
                <p className='customer-name' >Samar Singh</p>
              </div>
            </td>
            <td>78514568</td>
            <td>$128.20</td>
            <td><div className='delivered'>Delivered</div></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
export default OrdersTable;