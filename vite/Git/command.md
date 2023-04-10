### Git ---- 分布式管理工具

1. workspace 工作区域 代码状态分为  ***未暂存、未跟踪***

* git add . （filePath） 添加代码跟踪，放入暂存区
* git status 查看工作区文件状态（UNtracked）未跟踪  （modified）修改的文件  （stage）暂存，分期
* git log 查看仓库提交记录
* git diff 对比修改的文件
* git reset HEAD 回退版本，将暂存区域内容替换成（HEAD）版本内容，不影响工作区域
* git rm `<file>`删除暂存区域和工作区域的文件
* git rm -f `<file> 如果修改过文件并放到了暂存区域，使用 -f 强制删除`
* git rm --cached `<file> 使用 --cached 删除暂存区域文件，工作区域保存不变`
* git rm -r * 进入指定目录，执行该命令，递归删除这个目录和目录下的子目录
* git checkout . (git checkout `<file>`) 会将暂存区域的目录或者指定文件替换工作区域文件
* git checkout HEAD . (git checkout HEAD `<file>`) 会将HEAD中指向master分支的全部或指定文件替换掉工作区域和暂存区域
* git config  显示git配置信息
* git diff 比较文件的不同（暂存和工作区域）
* git remote -v 显示远程仓库
* git remote add alias url 添加远程版本库
* git remote rm name 删除远程库
* git remote rename oldname newname 修改远程版本库名字
* git fetch [alias] 和 git pull  拉取远端代码到你本地（git fetch 拉取不合并）（git pull 拉取自动合并）
* git merge [alias]/[branch] 将你拉取得远端代码和本地代码合并
* cat `<file> 查看文件`
* git push 远程主机名 推送本地代码到远程分支
* git push 远程分支名:本地分支名  远程和本地分支名一直可省略冒号 将本地的分支版本上传到远程并合并
* git push origin branchName:branchName 推送本地分支到远程主机下的某个分支并合并
* git push --force orgin branchName 强制推送
* git branch  --set-upstream-to=origin/dev 关联本地分支和上游分支
* git push -u orgin/dev 提交上游分支
* ***分支***
* git branch branchName 创建分支
* git checkout branchName 切换分支
* git merge 合并分支命令
* git branch 查看分支
* 分支创建时会保存创建时的代码，切换分支时会更改当前工作区域的代码为当前分支的代码
* git branch -d branckName 删除分支
* git merge branchName 合并分支

1. index(stage) 暂存区

* git commit -m'提交说明' 提交代码到本地仓库

1. **repository 版本库(本地仓库)**
