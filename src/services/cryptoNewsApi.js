import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { buildQueries } from '@testing-library/react'

const newsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '3db4e5be1emsh7b190a0031aa874p1c47f4jsn5a9722557686',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers:newsHeaders})

export const newsApi = createApi({
    reducerPath:'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safesearch=off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const {
    useGetNewsQuery,
} = newsApi;