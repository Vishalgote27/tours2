import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Protected = ({compo}) => {
    const { info } = useSelector(state => state.user)
    return info ? compo : <Navigate  to="/login"/>
}

export default Protected