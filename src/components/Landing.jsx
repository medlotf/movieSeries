import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import Spinner from "./Spinner";
import Movies from "./Movies";

export class Landing extends Component {
    render() {
        const { loading } = this.props;
        return (
            <div className="container">
                <SearchForm />
                {loading ? <Spinner /> : <Movies />}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state.searchReducer
});

export default connect(mapStateToProps)(Landing);
