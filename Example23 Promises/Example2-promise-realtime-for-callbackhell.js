function getUser(id) {
    return new Promise((resolve, reject) => {
                                               setTimeout(() => {
                                                                  console.log("Reading from a database....");
                                                                  resolve({ id: id, githubUsername: "jerrycode06" }); //(user) => getRepositories(user.githubUsername)
                                                                },
                                                           2000
                                                          );
                                            }
    );
  }
  
  function getRepositories(username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Extracting Repositories for ${username}....`);
        resolve(["repo1", "repo2", "repo3"]);                       //resolve(repos) => getCommits(repos[0])
        // reject(new Error("Error occured in repositories"));
      }, 2000);
    });
  }
  
  function getCommits(repo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Extracting Commits for " + repo + "....");
        resolve(["commits"]);
      }, 2000);
    });
  }


// Callback Hell
getUser(1, (user) => {
                        console.log("User", user);
                        getRepositories(user.githubUsername, (repos) => {
                                                                            console.log(repos);
                                                                            getCommits(repos[0], (commits) => {
                                                                                                                console.log(commits);
                                                                                                                // Callback Hell ("-_-)
                                                                                                              }
                                                                                        )
                                                                         }
                                        )   
                    }
)

// Replace Callback with Promises to avoid callback hell
getUser(1)
.then((user) => getRepositories(user.githubUsername)) //getRepositories("jerrycode06")
.then((repos) => getCommits(repos[0]))                //getCommits("repo1")
.then((commits) => console.log("Commits", commits))   //console.log("Commits", ["commits"])
.catch((err) => console.log("Error: ", err.message));



//Better Replace Callback with async instead Promises to avoid callback hell.
async function displayCommits() {
    try {
      const user = await getUser(1);
      const repos = await getRepositories(user.githubUsername);
      const commits = await getCommits(repos[0]);
      console.log("Commits", commits);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }
  
  displayCommits();