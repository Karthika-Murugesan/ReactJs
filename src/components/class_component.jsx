import React from "react";
//import { ReactDOM } from "react";
//Functional component:
import App1 from "./App1.css";
class TestComponent extends React.Component {
  render(){return (                                                                                                                                                                                                                     
    <body>
        <h1>Git Commands</h1>
  
    <table>
        <thead>
            <tr>
                <th>Command</th>
                <th>Function</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>git init</td>
                <td>Initialize a new Git repository</td>
            </tr>
            <tr>
                <td>git config --list</td>
                <td>List all Git configurations</td>
            </tr>
            <tr>
                <td>git config user.name "Karthika"</td>
                <td>Set user name for Git commits</td>
            </tr>
            <tr>
                <td>git config user.email "karthikam0912@gmail.com"</td>
                <td>Set user email for Git commits</td>
            </tr>
            <tr>
                <td>git status</td>
                <td>Show the status of changes</td>
            </tr>
            <tr>
                <td>git add file_name</td>
                <td>Add changes to the staging area</td>
            </tr>
            <tr>
                <td>git commit -m "commit message"</td>
                <td>Commit changes with a message</td>
            </tr>
            <tr>
                <td>git push</td>
                <td>Push changes to a remote repository</td>
            </tr>
            <tr>
                <td>git push -u origin main</td>
                <td>Push changes to the main branch</td>
            </tr>
            <tr>
                <td>git diff</td>
                <td>Show the differences between commits</td>
            </tr>
            <tr>
                <td>git revert</td>
                <td>Create a new commit that undoes changes</td>
            </tr>
            <tr>
                <td>git pull</td>
                <td>Fetch changes from a remote repository and merge</td>
            </tr>
            <tr>
                <td>git remote add origin url</td>
                <td>Add a remote repository</td>
            </tr>
            <tr>
                <td>git add .</td>
                <td>Add all changes to the staging area</td>
            </tr>
            <tr>
                <td>git branch -a</td>
                <td>List all branches (including remote branches)</td>
            </tr>
            <tr>
                <td>git branch</td>
                <td>List local branches</td>
            </tr>
            <tr>
                <td>git branch -M main</td>
                <td>Rename the current branch to main</td>
            </tr>
            <tr>
                <td>git checkout branch</td>
                <td>Switch to a different branch</td>
            </tr>
            <tr>
                <td>git merge branch2</td>
                <td>Merge branch2 into the current branch</td>
            </tr>
            <tr>
                <td>rm --cached file_name</td>
                <td>Remove a file from the staging area</td>
            </tr>
            <tr>
                <td>git log</td>
                <td>Show commit history</td>
            </tr>
            <tr>
                <td>git clone url</td>
                <td>Clone a repository from a URL</td>
            </tr>
        </tbody>
    </table>
</body>
  );
}
}
export default TestComponent;
// const fc=ReactDOM.createRoot(document.getElementById("root"))
// fc.render(<TestComponent/>)

