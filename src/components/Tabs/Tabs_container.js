import React from "react";
export default class Tabs_container extends React.Component {
  constructor() {
    super();

    this.state = {
      activeItem: -1,
      items: ["Home", "FAQ's", "Review"],
    };
  }

  handleItemClick(index) {
    this.setState({
      activeItem: index,
    });
    // const items = [];
  }

  render() {
    return (
      <div className="container">
        <div className="tabspart">
          <ul className="d-flex align-items-center justify-content-center">
            {this.state.items.map((item, index) => (
              <li
                key={index}
                className={this.state.activeItem === index ? "active" : ""}
                onClick={this.handleItemClick.bind(this, index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
