import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router";

const Detail = props => {

    let { id } = useParams();
    return (
        <div>
            <h1>Detalle de cada pokemon {id}</h1>
        </div>
    )
}

Detail.propTypes = {

}

export default Detail
