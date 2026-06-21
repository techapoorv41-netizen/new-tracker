import { useState, useEffect } from "react";
import axios from "axios";
import { use } from "react";


function UseLeetcode(username) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        if (!username) return


        setLoading(true);

        axios.get(`https://alfa-leetcode-api.onrender.com/${username}/solved`)




            .then((Res) => {
                setData(Res.data)

                setLoading(false)
            })

            .catch(err => {
                setError("User not found")
                setLoading(false);

            });
    }, [username]);

    return { data, loading, error };
}
export default UseLeetcode;
