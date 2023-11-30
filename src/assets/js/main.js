
const { data, status } = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie/",
    headers: {
        'X-API-KEY':'fe5bdfe37546c22c53827146ff9085ed',
    }
})

