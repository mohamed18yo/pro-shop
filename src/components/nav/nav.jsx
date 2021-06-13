import "./style.css";

function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <span className="pro">Pro</span>
        <span>Shop</span>
      </div>
      <div className="search">
        <input type="text" className="input-search" />
        <button className="search-btn">Search</button>
      </div>
      <div className="icons">
        <ul>
          <li>User</li>
          <li>WishList</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
