import MenuItem from "../Navigation/MenuItem"


function Navbar(){
    return <div className="flex justify-center items-center h-10 w-full bg-black text-white">
        <MenuItem title={"About"}/>
        <MenuItem title={"Projects"}/>
        <MenuItem title={"Services"}/>
    </div>
}
export default Navbar