function Signin3() {

    return (
    <div className=' flex justify-center items-center bg-signinbg bg-cover h-screen'>
        <div className='shadow-3xl border-2xl flex w-124 h-100'>
            <div className='basis-3/5 w-full h-full bg-signtties/[0.8]  flex flex-col pl-16 pt-12'>
                <div className="text-3xl text-signh font-bold mb-8 mt-4 ">Login</div>
                <div className="pr-16">
                    <div className="text-black/[0.50] mb-2 text-sm font-semibold">username</div>
                    <input className="w-full h-7 bg-signtties/[0.05] text-black/[0.3] p-2 border-1 border-black/[0.30] hover:bg-black/[0.05] transition transition-transform hover:scale-105 hover:border-none " 
                        type="text" 
                        placeholder="johncena1@gmail.com" 
                       
                    />
                    <div className="text-black/[0.50] mb-2 mt-4 text-sm font-semibold">password</div>
                    <input className="w-full h-7 bg-signtties/[0.05] text-black/[0.3] p-2 border-1 border-black/[0.30] hover:bg-black/[0.05] transition transition-transform hover:scale-105 hover:border-none "
                        type="text"
                    
                      
                    />
                    <div className=" mt-8 flex justify-center">
                        <button className="text-white bg-signbu/[0.51] basis-4/5 h-8 rounded-lg hover:bg-signbu" onClick={async () => {
                            
                     
                            }}>Sign In
                        </button>
                    </div>
                </div>
                <div className='mt-3 ml-8 '>
                    <div className=' text-black/[0.60] text-xs'>Don&apos;t have an account? <a className='text-black text-signtt' href="/signIn">signup</a></div>
                </div>
            </div>
            <div className='basis-2/5 w-full opacity-99 border-none h-full bg-signinright bg-cover'></div>
        </div>
    </div>
    );
}
export default Signin3;