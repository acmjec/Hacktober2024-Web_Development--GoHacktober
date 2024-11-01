export const Contributions = ({data}) => {
    return (
        <div className="space-y-2">
        {data.map((repo, index) => (
        
        <div key={index} className="flex flex-col gap-2 bg-white bg-opacity-10 p-2 rounded-lg">
            <h3 className="text-base font-bold">{repo.repo_name}</h3>
            <div>
            <strong>Issues:</strong>
            {repo.contributions.issues ? (
                repo.contributions.issues.map((issue, i) => (
                <div key={i}>
                    <a href={issue.html_url} className="text-blue-500 underline">{issue.title}</a>
                    <p>State: {issue.state}</p>
                    <p>Created: {new Date(issue.created_at).toLocaleDateString()}</p>
                    <p>Updated: {new Date(issue.updated_at).toLocaleDateString()}</p>
                </div>
                ))
            ) : (
                <p>No contributions available</p>
            )}
            </div>
            <div>
            <strong>Pulls:</strong>
            {repo.contributions.pulls ? <p>{repo.contributions.pulls}</p> : <p>No contributions available</p>}
            </div>
        </div>
        ))}
  </div>

    )  
}
 