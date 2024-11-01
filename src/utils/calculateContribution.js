export const getTotalContributions = (data) => {
    let totalRepos = 0;
    let totalIssues = 0;
    let totalPulls = 0;

    data.forEach(repo => {
        // Only count the repository if there are issues or pulls
        if (repo.contributions.issues !== null || repo.contributions.pulls !== null) {
            totalRepos += 1; // Count this repo
            if (repo.contributions.issues !== null) {
                totalIssues += repo.contributions.issues;
            }
            if (repo.contributions.pulls !== null) {
                totalPulls += repo.contributions.pulls;
            }
        }
    });

    return {
        totalRepos,
        totalIssues,
        totalPulls
    };
};