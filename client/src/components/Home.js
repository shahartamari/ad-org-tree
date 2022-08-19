import React from 'react';
import { useGetUsersQuery } from "../services/graphApi";
import OrgChart from './OrgChart';

const Home = () => {
    const params = useGetUsersQuery();

    return (<div>
        <OrgChart {...params} />
    </div>)
}

export default Home;