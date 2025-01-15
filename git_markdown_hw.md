# Most frequently used ones
1. Initiate .git
`git init`
2. Index changes
`git add`
   - All changes
`git add .`
    - Use **-A** to add all from root directory
`git add -A`
    - Add **--force** to forcefully index
`git add --force`
    - [Add **-p** to choose which part of the file to index](#index-partially)
3. Commit changes
`git commit`
    - Use -m to commit quickly
`git commit -m ""`
    - Use **--all** to commit directly, skipping manual index saving
`git commit --all`
`git commit -am ""`
5. Push unsynchronyzed changes
`git push`
7. Pull changes from server
`git pull`
9. Check how's git doing
`git status`
10. Reset indexed changes
`git reset HEAD`
11. Remove and index
`git rm`
    - With **-r** for folders
`git rm -r`
    - With **--cached** to leave it be in the workspace
`git rm --cached`
    - With **-f** if there are unidexed changes in the file
`git rm -f`

# Config settings
- Watch your config file
`cat .git/config`
`cat ~/.gitconfig`
- Config actions
`git config`
    - Change username
`git config user.name ""`
    - Or add **--global** key for global level
`git config --global user.name ""`
    - Change email
`git config user.email`
`git config --global user.email`
    - Add **-h** to call help
`git config -h`

# Cool stuff to make an habit
##### Index partially
`git add -p`
- Change author/committer data
  `git author name ""`
  `git author email`
  `git author date`
  `git committer name`
  `git committer email`
  `git committer date`
- Or as flags **--author**; **--date**
`git commit --author='Author Name <author@example.com>' --date='...'`
- Rename and index
  `git mv`