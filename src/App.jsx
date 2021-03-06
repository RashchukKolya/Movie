import React, { Component } from "react";
import { connect } from "react-redux";
import { Pagination } from "semantic-ui-react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import {
  fetchData,
  searchData,
  sortByYearUp,
  sortByYearDown,
  sortByRatingUp,
  sortByRatingDown
} from "./redux/actions/getFilmAction";
import style from "./App.module.css";

export class App extends Component {
  state = {
    num: 1,
    input: "",
    sortYearFlag: true,
    sortRatingFlag: true
  };

  componentDidMount = () => {
    this.props.fetchFilm(this.state.num);
  };

  inputFunc = async e => {
    await this.setState({
      input: e.target.value,
      num: 1
    });
    if (!this.state.input) {
      this.props.fetchFilm(this.state.num);
    }
  };

  clickFunc = async e => {
    let target = e.target.text;
    await this.setState({
      num: +target
    });
    if (this.state.input) {
      this.props.searchFilm(this.state.input, this.state.num);
    } else {
      this.props.fetchFilm(this.state.num);
    }
  };

  sortByYear = e => {
    e.preventDefault();
    if (this.state.sortYearFlag) {
      this.props.sortByYearUp(this.props.data.info);
    } else {
      this.props.sortByYearDown(this.props.data.info);
    }
    this.setState(prev => ({
      sortYearFlag: !prev.sortYearFlag
    }));
  };

  sortByRating = e => {
    e.preventDefault();
    if (this.state.sortRatingFlag) {
      this.props.sortByRatingUp(this.props.data.info);
    } else {
      this.props.sortByRatingDown(this.props.data.info);
    }
    this.setState(prev => ({
      sortRatingFlag: !prev.sortRatingFlag
    }));
  };

  searchFunc = e => {
    e.preventDefault();
    this.setState({
      num: 1
    });
    this.props.searchFilm(this.state.input, this.state.num);
  };
  render() {
    return (
      <React.Fragment>
        <Header
          sortByRating={this.sortByRating}
          sortByYear={this.sortByYear}
          searchFunc={this.searchFunc}
          input={this.state.input}
          inputFunc={this.inputFunc}
        />
        <Main data={this.props.data.info} />
        <div className={style.pagination}>
          <Pagination
            onPageChange={this.clickFunc}
            activePage={+this.state.num}
            totalPages={+this.props.data.pages}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            prevItem={null}
            nextItem={null}
            boundaryRange={1}
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
  data: state.filmList
});

const MDTP = dispatch => ({
  fetchFilm: value => dispatch(fetchData(value)),
  searchFilm: (value, page) => dispatch(searchData(value, page)),
  sortByYearUp: value => dispatch(sortByYearUp(value)),
  sortByYearDown: value => dispatch(sortByYearDown(value)),
  sortByRatingUp: value => dispatch(sortByRatingUp(value)),
  sortByRatingDown: value => dispatch(sortByRatingDown(value))
});

export default connect(
  MSTP,
  MDTP
)(App);
