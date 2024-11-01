export const startGithubAuthentication=async()=>{
    console.log("hi")
    window.location.href="http://localhost:8080/auth/github"
}

export const getContributions=async({username})=>{
    const response=await fetch(`http://localhost:8080/api/hacktoberfest-contributions?username=${username}`)
    const data=await response.json()
    return data
}



export const getProfileUrl = async ({ username }) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return null;
    }
  };
  