
import FoodCard from '../../../components/FoodCard'

function OrderTab({items}) {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
            {
                items.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
            }
        </div>
    )
}

export default OrderTab