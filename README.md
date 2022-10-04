# Sample: MyProfileTab - Microsoft Teams App

A Microsoft Teams Personal Tab application.

This Microsoft Teams Personal Tab application demonstrates a web based, SSO gated bot, hosted in a personal tab. SSO is implemented in the web app hosting the HTML which hosts the bot. SSO is not implemented in the tab itself.

The sample was generated using the yeoman Teams app generator, following the instructions here: https://learn.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/create-personal-tab?pivots=node-java-script

Ensure that you have all the [prerequisites](https://learn.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/tab-requirements) to build this personal tab.

The key file in the app is the ```manifest.json``` file. In it is defined the metadata of the app including the web page to be hosted:

```json
 "staticTabs": [
    {
      "entityId": "299b9872-74f2-42f8-aba3-450fc8c7ba21",
      "name": "My Profile Bot",
      "contentUrl": "https://profilebotrest.azurewebsites.net?name={loginHint}&tenant={tid}&theme={theme}",
      "scopes": [
        "personal"
      ]
    }
  ],
```

and the allowed domains:

```json
  "validDomains": [
    "{{PUBLIC_HOSTNAME}}", // from .env. resolved with 'gulp manifest'
    "login.microsoftonline.com"
  ],
```

## Running the code

1. From the root folder: **npm install**
2. Edit file ```.env``` and update: ```PUBLIC_HOSTNAME=profilebotrest.azurewebsites.net``` with your web hosted bot's url. (You should be able to navigate to this url in a browser to start a bot session.)
3. Edit ```.\src\manifest\manifest.json```update the **contentUrl:** and **validDomains:** properties. Note: validDomains should have the list of all domains the web page may need access. In the case of the sample, ```login.microsoftonline.com``` is needed in case the user has not yet logged in.
5. Build the package: **gulp manifest**. This creates a zip file in the ```package``` folder.
6. Upload the package to Teams. See instructions [here](https://learn.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/create-personal-tab?pivots=node-java-script#upload-your-application-to-teams).

## Getting started with Microsoft Teams Apps development

Head on over to [Microsoft Teams official documentation](https://developer.microsoft.com/en-us/microsoft-teams) to learn how to build Microsoft Teams Tabs or the [Microsoft Teams Yeoman generator docs](https://github.com/PnP/generator-teams/docs) for details on how this solution is set up.

## Useful links

* [Publish a custom app by uploading an app package](https://learn.microsoft.com/en-us/microsoftteams/upload-custom-apps)
* [Debugging with Visual Studio Code](https://github.com/pnp/generator-teams/blob/master/docs/docs/vscode.md)

