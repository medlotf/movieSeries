import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

export class Movies extends Component {
    render() {
        const { movies } = this.props;
        let content = "";
        content =
            movies.Response === "True"
                ? movies.Search.map((m, i) => <MovieCard key={i} movie={m} />)
                : null;

        return <div className="row">{content}</div>;
    }
}

const mapStateToProps = (state) => ({
    ...state.searchReducer
});

export default connect(mapStateToProps)(Movies);
