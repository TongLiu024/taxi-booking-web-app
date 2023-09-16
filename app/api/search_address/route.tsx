import { NextResponse } from "next/server";

//sample endpoint = 
//"https://api.mapbox.com/search/searchbox/v1/suggest?q=Michigan%20Stadium?language=en&limit=1&session_token=[GENERATED-UUID]&proximity=-83.748708,42.265837&country=US&access_token=pk.eyJ1IjoidGxpdTAyNCIsImEiOiJjbG1sbnI2OTAwZGFtMnR1anhidjJib2MxIn0.mdI7gE4FHMz1WMsCBNFMOg"
//the async function takes a request (a url address) and return the page based on the api routing
//i.e localhost.3000/api/search_address?q=155 Kallie Loop where ?q is the query name
export async function GET(request:any) {
    const BASE_URL = 'https://api.mapbox.com/search/searchbox/v1/suggest'
    // const {searchParams} = new URL(request.url);
    //searchParams is a URLSearchParams type
    const {searchParams} = new URL(request.url);
    ''
    const searchText = searchParams.get('q');

    const res = await fetch(BASE_URL + '?q=' + searchText + '?language=en&limit=4&session_token=[GENERATED-UUID]&proximity=-83.748708,42.265837&country=US'
    + '&access_token=' + process.env.MAPBOX_ACCESS_TOKEN,
    {
        headers: {
            'Content-Type': 'application/json'
        }
    } )

    const searchResult = await res.json();

    
    return NextResponse.json(searchResult);
} 