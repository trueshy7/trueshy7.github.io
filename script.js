// 替换为你的 GitHub 用户名
const githubUsername = "trueshy7";

const repoListContainer = document.getElementById("repo-list");

// GitHub API 获取仓库列表
fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then(response => response.json())
    .then(repos => {
        repos.forEach(repo => {
            const repoCard = document.createElement("div");
            repoCard.classList.add("repo-card");

            repoCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description ? repo.description : "没有描述"}</p>
                <a href="${repo.html_url}" target="_blank">查看项目</a>
            `;

            repoListContainer.appendChild(repoCard);
        });
    })
    .catch(error => {
        console.error("获取 GitHub 项目失败:", error);
        repoListContainer.innerHTML = "<p>无法加载项目列表，请稍后再试。</p>";
    });