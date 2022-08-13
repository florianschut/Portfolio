
// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return <p>You liked this.</p>;
//     }

//     // return e(
//     //   'button',
//     //   { onClick: () => this.setState({ liked: true }) },
//     //   'Like'
//     // );
//     return(
//     <button onClick={() => this.setState({ liked: true})}>
//         Like
//     </button>
//     );
//   }
// }
class ShoppingList extends React.Component {
    render(){
        return(
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Sea of Thieves</li>
                    <li>World of Warcraft</li>
                    <li>Assassin's creed Valhalla</li>
                </ul>
            </div>
        )
    }
}
const domContainer = document.getElementById('like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<ShoppingList name="Eivor"/>);