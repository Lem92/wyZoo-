## Install

create ```*.sh``` -file and insert this code. Run and watch the magic...

```
echo -n "Set ProjectName="
read ProjectName
echo -n "Set RepoName="
read RepoName

mkdir ${ProjectName}
cd ${ProjectName}
git init
git remote add origin https://gitlab.geniusee.com/geniusee-public/ui-boilerplate.git
git pull origin master
rm -rf .git

bower install
npm install

```