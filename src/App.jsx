import React, { Component } from "react";
import { connect } from "react-redux";
import { Pagination } from "semantic-ui-react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { fetchData, searchData } from "./redux/actions/getFilmAction";
import style from "./App.module.css";

export class App extends Component {
  state = {
    num: 1,
    input: ""
  };

  componentDidMount = () => {
    this.props.fetchFilm(this.state.num);
  };

  inputFunc = e => {
    this.setState({
      input: e.target.value
    });
  };
  clickFunc = async e => {
    let target = e.target.text;
    await this.setState({
      num: +target
    });
    this.props.fetchFilm(this.state.num);
    // this.props.searchFilm(this.state.input, this.state.num);
  };

  searchFunc = e => {
    e.preventDefault();
    this.props.searchFilm(this.state.input, this.state.num);
  };
  render() {
    console.log(this.props.data);
    return (
      <React.Fragment>
        <Header
          searchFunc={this.searchFunc}
          input={this.state.input}
          inputFunc={this.inputFunc}
        />
        <Main data={this.props.data.results} />
        <div className={style.pagination}>
          <Pagination
            onPageChange={this.clickFunc}
            defaultActivePage={1}
            totalPages={Math.ceil(this.props.data.total_results / 20)}
            // totalPages={this.props.data.total_pages}
            // totalPages={359}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            prevItem={null}
            nextItem={null}
            boundaryRange={2}
          />
        </div>
        <footer className={style.footer}>
          <h2 className={style.info}>
            &copy; Kolya Rashchuk &#9993; raschyk1993@gmail.com
          </h2>
        </footer>
      </React.Fragment>
    );
  }
}

const MSTP = state => ({
  data: state.filmList,
  search: state.searchFilmList
});

const MDTP = dispatch => ({
  fetchFilm: value => dispatch(fetchData(value)),
  searchFilm: (value, page) => dispatch(searchData(value, page))
});

export default connect(
  MSTP,
  MDTP
)(App);
