
let name= "John Doe";

const n1 = 10;
let n2 = 20;
function Header(){
    return(
        <>
        <h1>Header</h1>
        {/* <Content/> */}
        {name}
        {n1 * n2}
        </>
    )
}

export function Content(){
    return(
        <h2>Content</h2>
    )
}

export function Footer(){
    return(
        <h1>Footer</h1>
    )
}

export const key = "xSD#@#$DF$"
export default Header;