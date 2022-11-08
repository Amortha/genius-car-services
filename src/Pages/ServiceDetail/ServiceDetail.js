
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
  const { serviceId } = useParams();
 const [service] = useServiceDetail(serviceId)

  return (
    <div className='w-50 mx-auto'>
      <h2>{service.name}</h2>
      <img className='w-100' src={service.img}alt=''/>
      <p className=''>{service.description}</p>
      <div className='text-center'>
        <Link to={`/checkout/${serviceId}`}>
          <button className='btn btn-primary'>proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;