import React from 'react'

function Cart() {
    return (
        <div className='bg-white p-2 shadow-lg rounded-lg'>          
            <table className="mt-10 w-full table-auto text-sm lg:text-base" cellspacing="0">
                <thead>
                    <tr className="h-12 uppercase">
                        <th className="hidden md:table-cell"></th>
                        <th className="text-left">Item</th>
                        <th className="text-center pl-5 lg:pl-0">
                        <span className="text-center">Qty</span>
                        </th>
                        <th className="md:hidden sm:hidden text-center md:table-cell">Unit price</th>
                        <th className="text-center">Total price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="hidden pb-4 md:table-cell">
                    
                        </td>
                        <td>
                        <a href="#">
                            <p className="text-left">Pizza Margherita</p>
                            <form action="" method="POST">
                            <button type="submit" className="text-gray-700 text-left">
                                <small>(Remove)</small>
                            </button>
                            </form>
                        </a>
                        </td>
                        <td className="justify-center md:justify-end md:flex mt-6">
                        <div className="w-20 h-10">
                            <div className="relative flex flex-row w-full h-8">
                                <input type="number" value="1" 
                        className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                            </div>
                        </div>
                        </td>
                        <td className="md:hidden sm:hidden text-center md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                            $230
                        </span>
                        </td>
                        <td className="text-center">
                        <span className="text-sm lg:text-base font-medium">
                            $230
                        </span>
                        </td>
                    </tr> 
                    <tr>
                        <td className="hidden pb-4 md:table-cell">
                    
                        </td>
                        <td>
                            <p className="text-left">T-Bone</p>
                            <form action="" method="POST">
                                <button type="submit" className="text-gray-700 text-left">
                                    <small>(Remove)</small>
                                </button>
                            </form>
                            </td>
                            <td className="justify-center md:justify-end md:flex md:mt-4">
                            <div className="w-20 h-10">
                                <div className="relative flex flex-row w-full h-8">
                                <input type="number" value="1" 
                                    className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                </div>
                            </div>
                        </td>
                        <td className="md:hidden sm:hidden text-center md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                            $480
                        </span>
                        </td>
                        <td className="text-center">
                        <span className="text-sm lg:text-base font-medium">
                            $480
                        </span>
                        </td>
                    </tr> 
                    <tr>
                        <td className="hidden pb-4 md:table-cell">
                    
                        </td>
                        <td>
                        <a href="#">
                            <p className="text-left">Pizza Margherita</p>
                            <form action="" method="POST">
                                <button type="submit" className="text-gray-700 text-left">
                                    <small>(Remove)</small>
                                </button>
                            </form>
                        </a>
                        </td>
                        <td className="justify-center md:justify-end md:flex mt-6">
                            <div className="w-20 h-10">
                                <div className="relative flex flex-row w-full h-8">
                                <input type="number" value="1" 
                                className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                </div>
                            </div>
                            </td>
                        <td className="md:hidden sm:hidden text-center md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                            $230
                        </span>
                        </td>
                        <td className="text-center">
                        <span className="text-sm lg:text-base font-medium">
                            $230
                        </span>
                        </td>
                    </tr> 
                    <tr>
                        <td className="hidden pb-4 md:table-cell">
                        </td>
                        <td>
                        <a href="#">
                            <p className="text-left">Pizza Margherita</p>
                            <form action="" method="POST">
                            <button type="submit" className="text-gray-700 text-left">
                                <small>(Remove)</small>
                            </button>
                            </form>
                        </a>
                        </td>
                        <td className="justify-center md:justify-end md:flex mt-6">
                        <div className="w-20 h-10">
                            <div className="relative flex flex-row w-full h-8">
                                <input type="number" value="1" 
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                </div>
                        </div>
                        </td>
                        <td className="md:hidden sm:hidden text-center md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                            $230
                        </span>
                        </td>
                        <td className="text-center">
                        <span className="text-sm lg:text-base font-medium">
                            $230
                        </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="hidden pb-4 md:table-cell">
                        </td>
                        <td>
                        <a href="#">
                            <p className="text-left">Pizza Margherita</p>
                            <form action="" method="POST">
                            <button type="submit" className="text-gray-700 text-left">
                                <small>(Remove)</small>
                            </button>
                            </form>
                        </a>
                        </td>
                        <td className="justify-center md:justify-end md:flex mt-6">
                        <div className="w-20 h-10">
                            <div className="relative flex flex-row w-full h-8">
                                <input type="number" value="1" 
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                </div>
                        </div>
                        </td>
                        <td className="md:hidden sm:hidden text-center md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                            $230
                        </span>
                        </td>
                        <td className="text-center">
                        <span className="text-sm lg:text-base font-medium">
                            $230
                        </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="hidden pb-4 md:table-cell">
                        </td>
                        <td>
                        <a href="#">
                            <p className="text-left">Pizza Margherita</p>
                            <form action="" method="POST">
                            <button type="submit" className="text-gray-700 text-left">
                                <small>(Remove)</small>
                            </button>
                            </form>
                        </a>
                        </td>
                        <td className="justify-center md:justify-end md:flex mt-6">
                        <div className="w-20 h-10">
                            <div className="relative flex flex-row w-full h-8">
                                <input type="number" value="1" 
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                </div>
                        </div>
                        </td>
                        <td className="md:hidden sm:hidden text-center md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                            $230
                        </span>
                        </td>
                        <td className="text-center">
                        <span className="text-sm lg:text-base font-medium">
                            $230
                        </span>
                        </td>
                    </tr>   
                </tbody>
            </table>                       
                
   
            <div className="p-4">
                <div className="flex justify-between border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-base lg:text-lg font-bold text-center text-gray-800">
                    Total
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    $710
                    </div>
                </div>
        
                <a href="#">
                    <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                    Checkout
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Cart