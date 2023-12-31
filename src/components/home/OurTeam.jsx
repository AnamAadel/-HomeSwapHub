import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import TeamCart from '../common/TeamCart';

function OurTeam() {
    const [team, setTeam] = useState([]);
    const { myBaseUrl } = useAxiosSecure();
    

    useEffect(() => {
        function fetchData() {
            myBaseUrl.get("/our_teams").then(res => setTeam(res.data)).catch(err => console.log(err))
        }
        fetchData()
    }, [myBaseUrl])
    return (
        <section className="py-6 bg-slate-100 text-gray-800">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-lg font-medium tracki text-center uppercase">our team</p>
                <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">Behind the scenes, the skilled individuals work their magic.</h1>
                <Marquee pauseOnHover={true}>
                    <div className="flex mt-8">
                        {team && team.map((item, ind) => (
                            <TeamCart item={item} key={ind} />

                        ))}
                    </div>

                </Marquee>


            </div>
        </section>
    )
}

export default OurTeam