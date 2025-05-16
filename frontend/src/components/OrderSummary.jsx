
import { motion } from 'framer-motion';
import { useCartStore } from '../stores/useCartStore';
import { Link } from 'react-router-dom';
var isChecked = false;
 



export const OrderSummary = () => {
    const {total} = useCartStore();
    const formattedTotal = total.toFixed(2);
     
    
  return <motion.div className='space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6'
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  >
    <p className='text-x1 font-semibold text-emerald-400'>Order Summary</p>

    <div className='space-y-4'>
        <div className='space-y-4'>
            <dl className='flex items-center justify-between gap-4 '>
                <dt className='text-base font-normal txet-gray-400'>TOTAL:</dt>
                <dd className='text-base font-medium text-gray-300'>₹{formattedTotal}</dd>
            </dl>
        </div>
        <motion.button className='flex w-full items-center justify-center rounded-lg bg-emerald-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 ' whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} onClick={() => isChecked=true }>
            Proceed To Checkout
        </motion.button>
        
        <div className='flex items-center justify-center'>
            <span className='text-sm font-normal text-gray-400'>Or</span>
            <Link to='/' className='ml-2 text-sm font-medium text-emerald-400 hover:text-emerald-600'>Continue Shopping 
            
            </Link>
        </div>

    </div>
    
			


  </motion.div>
    
}

export default OrderSummary;
export var isChecked;