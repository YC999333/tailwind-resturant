import React from 'react'

function Cart() {
    return (
        <div className='overflow-y-auto bg-white p-2 shadow-lg rounded-lg'>          
            <table className="mt-5 table-auto text-sm sm:text-md lg:text-base" cellspacing="0">
                <thead>
                    <tr className="h-12 uppercase">
                        <th className="hidden md:table-cell"></th>
                        <th className="text-sm sm:text-md lg:text-base text-left">Item</th>
                        <th className="text-sm sm:text-md lg:text-base text-center pl-5 lg:pl-0">
                        <span className="text-sm sm:text-md lg:text-base text-center">Qty</span>
                        </th>
                        <th className="text-sm sm:text-md lg:text-base text-center">Unit price</th>
                        <th className="text-sm sm:text-md lg:text-base text-center">Total price</th>
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
                        <td className=" text-center md:table-cell">
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
                        <td className=" text-center md:table-cell">
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
                        <td className=" text-center md:table-cell">
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
                        <td className=" text-center md:table-cell">
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
                        <td className=" text-center md:table-cell">
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
                        <td className=" text-center md:table-cell">
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
                        <td className=" text-center md:table-cell">
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

                <label id="orderMethod" className="block text-base font-bold mt-5 m-3">
                    Pick up or Delivery?
                </label>
                <select
                    className="h-full rounded-lg border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option value="5">Pick UP</option>
                    <option value="10">Delivery</option>
                </select>
        
                <a href="#">
                    <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                    Checkouts
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Cart