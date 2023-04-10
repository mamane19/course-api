# Muralex Api 📱 Conventions

## Commit Conventions 📝
We are using the following conventions to commit our code:
- Commit messages should be short and descriptive. They should be one sentence long. They should not be too long. 
- We are using the following commit types:
  - **`feat`**: A new feature
  - **`fix`**: A bug fix
  - **`chore`**: A chore (e.g. updating README.md, package.json, or other files that do not change the source code)
  - **`config`**: A change in the configuration
  - **`docs`**: Documentation only changes
  - **`style`**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  -  **`refactor`**: A code change that neither fixes a bug nor adds a feature
  - **`test`**: Adding missing tests
  - **`build`**: Changes that affect the build system
  - **`ci`**: Changes to our CI configuration files and scripts
  - **`revert`**: Revert to a commit
  - **`WIP`**: Work in progress
  - **`perf`**: A code change that improves performance
  - -: A placeholder for a future commit type
- All commit messages should be in imperative mood. A commit message should not be in decling mood.
- All commit messages should follow the following format: `type(scope/edis): subject/body/description`.   
An example: `feat(auth): add login feature`.

## Comments 💬 Conventions
We are using the following conventions to comment our code fo noting:
- We are using the following comment types:
-  **`TODO`**: A task that needs to be done
-  **`FIXME`**: A task/bug that needs to be fixed
-  **`NOTE`**: A note
-  **`HACK`**: A piece of code that is not part of the codebase
-   **`REVIEW`**: A review of a commit
Those above are used in this format: `TODO(assignee): subject/body/description`.
Example: `TODO(@mamane19): add login feature` to tell that this TODO goes to mamane19.    
Same for `FIXME(@mamane19): redirection url not working` to tell that this FIXME goes to mamane19.  


Please always comment your code and make sure that you comment your code in the following format:
```typescript
/**
* It verifies an access token with Google'a API and gets the user's information using the token.
* @param {string} accessToken - The access token that you get from the client.
* @returns A GoogleAuthDto object
*/
```
The above states: 
- What is the purpose of the function?
- What is the input?
- What is the output?
Feel free to add more in the function itself. And also a whyer statement whenever necessary.


## Code Conventions 📝 (later)
- [Todo](
     https://help.github.com/articles/marking-work-as-done-and-todo-list-items-for-later-action/)
