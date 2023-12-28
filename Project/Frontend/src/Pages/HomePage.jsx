import Header from "../Header"

function HomePage() {
    return (
        <>
            <Header />
            <div className="flex justify-center items-center">
                
                <div className="border-[5px]  rounded-lg border-gray-400 mt-16 w-[35rem] p-12">
                    <h1 className="flex text-3xl justify-center items-center font-bold italic">
                     Hello New User👋👋👋 <br/>
                     and Welcome to Website. <br/>
                    We will be here for your prepration.<br/>
                     This website will help
                     you to pass your tests.
                
                    </h1>
                    
                </div>    
              
            </div>
        </>
    )
}

export default HomePage