### Git ---- 分布式管理工具

1. workspace 工作区域 代码状态分为  ***未暂存、未跟踪***

* git add . （filePath） 添加代码跟踪，放入暂存区
* git status 查看工作区文件状态（UNtracked）未跟踪  （modified）修改的文件  （stage）暂存，分期
* git log 查看仓库提交记录
* git diff 对比修改的文件
* git reset HEAD 回退版本，将暂存区域内容替换成（HEAD）版本内容，不影响工作区域
* git rm --cached `<file> 删除暂存区域文件，工作区域保存不变`
* git checkout . (git checkout `<file>`) 会将暂存区域的目录或者指定文件替换工作区域文件
* git checkout HEAD . (git checkout HEAD `<file>`) 会将HEAD中指向master分支的全部或指定文件替换掉工作区域和暂存区域
* git config  显示git配置信息
* git diff 比较文件的不同（暂存和工作区域）



1. index(stage) 暂存区

* git commit -m'提交说明' 提交代码到本地仓库




1. **repository 版本库(本地仓库)**
