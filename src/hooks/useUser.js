import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';


const getUserById = async (userId) => {
    console.log(userId, "UserIDDDDDDDDDDDDDDDDD");
    if(userId){
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        console.log(res, "getUserById");
        return res.data
    }
    else return {};
}

const getUsers = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return res.data;
}


const useUser = () => {
    const queryClient = useQueryClient();
    const { data: users } = useQuery({ queryKey: ["users"], queryFn: getUsers });

    // const fetchUserById = async (userId) => {
    //     console.log(userId, "fetchUserById:be");
        // await fetchUserByIdQuery.refetch({ userId });
        // return queryClient.getQueryData(['userById']);
        // return fetchUserByIdQuery.data;
    // }

    return { users };
}   

const useGetUserById = (userId) => {
    return useQuery({ 
        queryKey: ["userById", userId], 
        queryFn: () => getUserById(userId),
    });
}

export { useUser, useGetUserById };