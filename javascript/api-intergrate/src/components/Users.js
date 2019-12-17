import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios';

function Users() {
    const [loding, setLoding] = useState(false);
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {

        try {
            setUsers(null);
            setError(null);
            setLoding(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (e) {
            setError(e);
        }

        setLoding(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if(loding) return <div>로딩중...</div>;
    if(error) return <div>에러발생...</div>;
    if(!users) return null;

    return ( 
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                    {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchData}>다시 불러오기</button>
        </>
    );
}

export default Users;