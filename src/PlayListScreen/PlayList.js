
import "./Playlist.css"
import { useVideo } from "../Context/VideoProvider";
import { Link } from "react-router-dom";
import { LeftBar } from "../LeftNavBar/LeftBar";

export function PlayList() {
  const { state :{customplaylists},dispatch} = useVideo();
  return (
    <div style={{ height:"150vh"}}>
    <div style={{ padding: "1rem", marginTop: "3rem" }}>
    <LeftBar/>
  </div>
    <div className="playlist_row_div">
    <div className="playlist_rows">
      <div style={{ display: "flex" }}>
          <h1 style={{ fontWeight: "700" }}>Your Playlists</h1>
          <div className="symbol">
          <span
            class="iconify leftbar_icons"
            data-icon="zmdi:playlist-plus"
            data-inline="false"
          ></span>
          </div>
        </div>
      <div>
       
        <div className="playlist" >
            {
              customplaylists.map((currentPlaylist)=>{
                return <>
                <div style={{display:"flex"}}>
                  <div><h2>{currentPlaylist.name}</h2></div>
                  <div style={{marginTop:"1.5rem",marginLeft:"0.5rem",cursor:"pointer"}}> {currentPlaylist.name !=="Watch Later" &&<div onClick={()=>dispatch({type:"DELETE_PLAYLIST",payload:currentPlaylist.name})}>
                    <span
                class="iconify dustbinIcon"
                data-icon="mdi:delete"
                data-inline="false"
              ></span></div>}</div>
                
                </div>
             
                <div className="scrollPlaylist" style={{display:"flex"}}>
                {  currentPlaylist.videos.map(({itemFound})=>{
                 return(
                  <div className="iframe_row_playlist">
                  <div style={{ height: "100%" }}>
                    <Link to={`/video/${itemFound._id}`}>
                      <img
                        className="video_image playlist_img"
                        src={itemFound.thumbnail}
                        alt="video_image"
                      />
                    </Link>
                    <div
                      className="titles"
                      style={{ display: "flex", position: "relative" ,fontSize:"12px"}}
                    >
                      <div>
                        <img  className="avatar playlist_avatar" src={itemFound.image} alt="avatar" />
                      </div>
                      <div
                        className="titleviews"
                        style={{
                          positon: "absolute",
                          right: "0",
                          marginLeft: "20px",
                          bottom: "0",
                          marginTop: "13px"
                        }}
                      >
                        <span style={{ fontWeight: "400", marginTop: "10px" }}>
                          {itemFound.name}
                        </span>
                        <p>{itemFound.views}</p>
                      </div>
                    </div>
                  </div>
                </div>
                 )
               })}
                </div>
                </>
              })
            } 
        </div>
    </div>
    </div>
    </div>
    </div>
  );
}
