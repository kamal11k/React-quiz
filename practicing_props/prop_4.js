class Users extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map(name=><li>{name}</li>)}
      </ul>
    )
  }
}

ReactDOM.render(
  <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
  document.getElementById('app')
);
