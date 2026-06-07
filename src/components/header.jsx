

function Header(){
    return(
        <div className='bg-gray-200 p-4 text-center flex '>
            <h1 >Logo</h1>
            <ul className='flex justify-center space-x-4'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login</button>
        </div>
    )
}
export default Header;