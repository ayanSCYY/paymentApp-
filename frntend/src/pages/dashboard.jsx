import { useSearchParams } from 'react-router-dom'

function Dashboard(){
    const [SearchParams]= useSearchParams();
    
    const firstname=SearchParams.get('firstname');
   return (
    <div>
        <div>Payments App</div>
        <div>hello, {firstname} <div>{firstname[0].toUpperCase()}</div> </div>
    </div>
   )    
}
export default Dashboard;