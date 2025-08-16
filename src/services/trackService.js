const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

export const getAllTracks = async ()=>{
    try{
        const payload  = await fetch(BASE_URL)
        if(payload.ok){
            const tracks = await payload.json()
            return tracks
        }else{
            console.error('server failed')
            return null
        }
    }catch(e){
        console.error('getAllTracks failed',e)
        return null
    }
}
export const createTrack = async ({title,artist})=>{
    try{
        const payload  = await fetch(BASE_URL,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title,artist})
        })
        if(payload.ok){
            const track = await payload.json()
            return track
        }else{
            console.error('server failed')
            return null
        }
    }catch(e){
        console.error('getAllTracks failed',e)
        return null
    }
}
export const updateTrack = async ({title,artist,_id})=>{
    try{
        const payload  = await fetch(`${BASE_URL}/${_id}`,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title,artist})
        })
        if(payload.ok){
            const track = await payload.json()
            return track
        }else{
            console.error('server failed')
            return null
        }
    }catch(e){
        console.error('getAllTracks failed',e)
        return null
    }
}
export const deleteTrack = async (_id)=>{
    try{
        const payload  = await fetch(`${BASE_URL}/${_id}`,{
            method:'DELETE'
        })
        if(payload.ok){
            const track = await payload.json()
            return track
        }else{
            console.error('server failed')
            return null
        }
    }catch(e){
        console.error('getAllTracks failed',e)
        return null
    }
}