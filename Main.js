// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
clientID: "e3db1421442c4661a3daefd6ccbcb606",
	    clientSecret: "fd483bcf60904eab8645c2a9f34ecef4",
	    accessToken: "BQAOK5NGDhLvGcBwe0rXeR2fBKY7NtfnxgSCPMrAUuqnU9DWUIqmzi7wm5d__i1DOBXOFWKSJkrtsaOs1j4yUOxq0A79UrXUBIRWGXlJ_4zfg54OT7ntP8GhyWoBOXqfVR7deobw4Newwf-LUBL8221BSV5Y9n5EFQx4fpDdL1eKYF2oS-QoejKGzdc",
	    refreshToken: "AQAJuCUSkThH5om7DjU8WXPjs8TYZi4l7IH1QbXutMZwg8N0gBcYN2VcNODCae89RQrhbCj5--hA5ECffsTew3SX-XtT1nQ8lPRAz1lLwn5luOkRWLE99u2nQ8apldymMVg"
	  
const token = 'BQD_DSwy15mzEwSaFwY7lV_t42jRUk9FFVyR-Oqk4pOFR-_yRooTN4MWLa9d07kjzAvRgXdPGcWeGWLNGjAFrPRYBvT7N78uw4w1KuSDvBzWGq4xHV8dSyParBNNBB_Aeeq0NHAcv7QbYZRt586rOnJk9GGC2TLs55C-CAw_3iSZYSm-KDwFUZTEmuGMpfpPof2wiSmiVsSU5HExK6qNk3lPfY4PelYlb4ITmgYZ5g_VrdDG0uNEQnA12rBMvsChTM0HpLIT9r8za1uvIgJ2Ctl93HKET7SXKsvI1eW-PFRU912LMtHLVOHB_Hh2QoQdCy3V3YSLwdYd292LQIL69aNmM9lGdOcrL5Ykmbzjvx-1r3g';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);
