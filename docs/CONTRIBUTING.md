<!-- omit in toc -->

# Contributing to Vip Customer Web App

## IMPORTANT!!! : OPEN YOUR PULL REQUESTS ON `dev` BRANCH, NOT `master`

First off, thanks for taking the time to be part of this awesome project ❤️

All Team members contribution are valued and encouraged, therefore, do not hesitate to contribute. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for the Team leads and PR Leads and smooth out the experience for all involved. Can't wait to collaborate and build an elegant Vip Custormer Application 🎉

## Table of Contents

- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
  - [First Time Contributing?](#first-time-contributing?)

 - [Commit Messages](#commit-messages)

## I Have a Question

> If you want to ask a question, we assume that you have read the available instructions, if you still face any confusion, Kindly reach out to the team leads, and they will be willing to help.

Before you ask a question, it is best to search for existing [Issues](https://linear.app/axe-frontend/team/AXE/active) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue. It is also advisable to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open an [Issue](https://linear.app/axe-frontend/team/AXE/all).
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant.

Once again, reach out to the Team Lead about any confusion you might face.

## I Want To Contribute

In order to contribute to this project, the entire process follows the following structure

- You identify an [issue](https://linear.app/axe-frontend/team/AXE/all) that is assigned to you.
- You make changes that solves this issue, you then write tests (Where required) and ensure that it passes.
- You open a pull request, which will be reviewed by the Team lead or PR Lead, and merged if it checks the right boxes.

Congratulations, you have just contributed,🎉🎉🎉


#### First Time Contributing?

Everyone was a beginner at a point, and it goes without saying that, to become a master, you need to be a learner. Therefore, if this is your first time contributing, relax, read the following instructions and I promise you won't mess things up.

> And even if you do, the PR managers will catch it. But please don't.

So here is a run down of how you would go about contributing:



- #### Clone the Repository on your Local Machine

  The next thing you want to do is clone (make a copy) the Vipcustomer.web repo, to your local machine (Laptop, PC, MacBook). To do that,

  - Copy the link of Vipcustomer.web repository.
  - Open the folder you want to work on your machine.
  - Open your favourite editor.
  - Open the terminal.
  - run `git clone [Link to the vipcustomer.web repository]`.
    > The link should look like this : `https://github.com/workshopapps/vipcustomer.web.git`

  


- #### Commiting your changes

  Now, you can start making changes that relates to your issues and then commiting them. To do this, follow these instructions:

  - First, create a branch with the feat prefixing the name of the feature you are to implement.
  - For example, do this by running `git checkout -b feat/signup button component`
  - Make your changes.
  - add the changes using `git add .` or any one that serves your needs.
  - add concise commit messages, referencing your issue number with a close action.
    > e.g `git commit -m "adds signup button to the sign up page close #21"`
    >
    > What this mean is that, when the PR leads merge your pull request (More on that below). Issue #21 is automatically closed.
  - run `git push -u origin [name of the repo you created]`
    > For the example above, you run
    >
    > `git push -u origin feat/signup`
    >
    > Which pushes your changes to your online copy, after which you then open a pull request.

- #### Opening Pull requests

  Now that you have updated your online copy. You will need a way to inform the PR Leads handling the original repository that your contribution is ready. To do that, you open a Pull request, which simply means that you want them to combine(merge) your changes with that of the original repository. Because, what is the essence of making changes without the changes being merged right?

  To open a pull request, immediately after the last step (commiting your changes with push):

  - Head over to your branch on the vipcustomer.web github repository .
  - You will see the option to open a pull request.
  - Create your pull request with the title `AXE-123 My PR adds a feature` where AXE is the issue ID
  - Explain what your changes does, adding images and proof (test) if needed.
  - Click the open pull request button and wait.
  - Add comments where neccesary and wait for the PR Leads to check.

- #### Constantly update from origin

  Now that you have your issues, you have clone the repository, you have cloned the repository and also set the origin. To stay up to date and avoid conflicts. Before you edit anything, you need to update your local branch. Therefore, whenever you want to make any change, first run an update command like so:

  - In the directory of the project on your local machine
  - Open the terminal.
  - Run `git pull origin dev`
    > This will check for any changes that have been made to the original repository, it will then bring those changes to your local machine and merge (merge) the changes.


### Commit Messages

Commit messages should include concise messages about what was done and what has changed. Failure to follow this would result in the pull request being rejected.

Let's build the vip customer app, shall we ?🎉

## Other Information

- Please make sure your commit messages and pr titles give enough info about the changes you've made.

- ### Pull Requests

  - Take note of all instructions above
  - The main branch for development would be the **dev** branch
  - Do not make a pull request with changes to the master branch
  - Create a branch in the format...Feat/(Task) e.g Feat/ Button Component and implement your work only in such branch
  - Whatever task it is that you do must be responsive on all screens
  - Add a live link to your Pull Request
  - Make sure your commit messages and PR title are precise and meaningful, no..."it is now working" or "finally" commit messages, else your PR may not be merged
  - Add a screenshot of what it is that you've worked on for all screens...mobile, tab, desktop screens
  - Make sure your branch is up to date with the master branch and without conflicts before making your pull request, if not your PR may not be merged
  - Push your code as soon as you can [ASAP]
  - Link whatever issue it is that you worked on to your pull request
  - Add all other neccessary links you may have to your pull request inluding the link to the design
  - In the comment section of the pull request, document your work thoroughly(a helpful description)
  - In a situation where you work on functional parts add a show `what it does` video if you can
  - Do `git pull origin` at least twice a day to be up to date with the repo
  - Always do a git fetch or pull of the master branch before you write code and before making your pull request
  - Your pull request must not change the work of others
  - Your work should be pixel perfect
