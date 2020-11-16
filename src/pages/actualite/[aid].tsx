import React, { Component, useState, useEffect } from 'react';
import NavBarComponent from '../../components/HeaderComponent';
import ActualityDetailComponent from '../../components/ActualityDetailComponent';
import FooterComponent from '../../components/FooterComponent';
import { useRouter } from 'next/router'
import { NewsAPI } from 'api-service';
const SingleActuality = () => {
    const [singleActuality, setSingleActuality] = useState({})
    const router = useRouter()
    const { aid } = router.query
    const fetchData = async () => {
        try {
            const result = await NewsAPI.getNewsById(aid)
            setSingleActuality(result)
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <NavBarComponent />
            <ActualityDetailComponent singleActuality={singleActuality} />
            <FooterComponent />
        </>
    )
}
export default SingleActuality