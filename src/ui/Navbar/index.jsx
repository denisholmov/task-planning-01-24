export const Navbar = ({logo, items, logout}) => {
    return(
        <aside>
            <div>
                <img src="#" alt="" />
            </div>

            <ul>
                {items.map((item)=>{
                    return <li>{item}</li>
                })}
            </ul>

            <div>
                {logout}
            </div>
        </aside>
    )
}