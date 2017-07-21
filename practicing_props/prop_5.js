class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {this.props.list.filter(person=>person.friend==true)
                          .map(friend=><li>{friend.name}</li>)
          }
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {this.props.list.filter(person=>person.friend==false)
                          .map(friend=><li>{friend.name}</li>)
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]}
  />,
  document.getElementById('app')
);
