import propTypes from 'prop-types';
function Header2({firstname}) {

    return (
      <div className="h-24 w-50 bg-white/[0.7]"> 
        <div className="flex justify-between">
            <div className="flex"> 
              <div className="h-9 w-9 b border-4 border-t-figma-bt border-r-figma-br border-b-figma-bl border-l-figma-bb ml-16 mr-2 mt-5 "></div>
              <div className='flex justify-between '>
                <div className='mr-3 w-10 h-10 border-1 border-black rounded-full text-center text-2xl font-bold  mt-3 font '>{firstname[0].toUpperCase()}</div>
                <div className='text-black font-light text-2xl mr-5 mt-3'>hello, {firstname}  </div>
            </div>
            </div>
            
        </div> 
    </div>
    )
}


Header2.propTypes = {
    firstname: propTypes.string
}

export default Header2;