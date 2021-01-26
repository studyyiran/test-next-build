yarn run build
echo next build finish

## 将关键的文件扔到build里面
filepath="/data/mynext/test-build2"
host="49.232.155.212"
ssh root@$host "mkdir -p $filepath"
scp -ri ~/.ssh/github_studyyiran ../test-build root@$host:$filepath