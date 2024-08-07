import { useQuery } from "@tanstack/react-query"
import { verifyToken } from "../api/AdminAPI"

export default function useAuth() {
    
    const { isError : isErrorAuth , isLoading : isLoadingAuth, error : errorAuth } = useQuery({
        queryKey: ['verify-token'],
        queryFn: verifyToken,
        retry: false,
        refetchOnWindowFocus: true
    })
    
    return {isErrorAuth, isLoadingAuth, errorAuth}
}
