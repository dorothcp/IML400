# Whodat Assignment

### 1. Setup  
To do this you need to update your __CLASS__ repository.  
1. Go to your directory that has the class repository   
2. Enter:   

```
git pull
```

this will pull the new files from the repository to your computer. You will find the files that you need in this folder:


```
whodat_assignment
```

Now, in Finder or Windows Exlporer you are going to add the assignment folder to your class website. You should have a workshops folder for your class website. (If not refer to the syllabus instructions again to remind yourself about the directory structure of your website. ) Copy the _whodat\_assignment_ folder into the _workshop_ directory of your website. You probably should also add an index file to the _workshop_ directory with a link to the _whodat\_assignment_ directory.

Go into that directory.  
(---sidebar---- Rememeber the linux command to change directories??)

```
cd
```

shortcut to go to the parent directory of the directory that you are in:  

```
cd ..
```
--- end sidebar ---)


Go to the assignment folder in your class repository with Terminal. From inside the _whodat\_assignment folder enter:

```
npm start
```

this will start your browser-sync session and open your default web browser. Make sure that you are using Chrome. From here you can open the Chrome Web Developer console and start working.

To set up your Chrome Web Developer Session as an editor:
Follow the instructions here:  
[Setup](https://developer.chrome.com/devtools/docs/workspaces)

follow the instructions for: 'Add local source files to workspace'


### 2. Assignment
I am giving you a series of "challenges" of increasing difficulty. Accomplish as many as you can and we will review then in class. See below for handin instructions.

#### Workshop Process  
If you look at _main.js_ inside of _whodat\_assignment/public/scripts_ you willl see that there are commented sections that describe the challenge. There is also a section for you to paste your code.  

I would suggest that you use an iterative process like the one that we used in class. That is:

1. Use the console in Chrome Developer to enter commands and test the results.  
2. Once you have a series of commands that work then you can cut and paste the code that you entered into _main.js_.  
3. When you do this the next time you reload the webpage the script in _main.js_ will automatically run.  

Do the best you can. I expect that you may struggle with some or all of this. Don't get frustrated, or at least keep your frustration in perspective: learning only happens when you get unstuck. But to get unstuck (and therefore learn) you first have to get stuck. Alright I ain't a poet...and I know it...(ha!) but just chill, try to have fun with it and realize that by next week this time this assignment will be easy for all of you once we review your attempts in class.  


#### Workshop Resources
To find help on the different methods that you can call and what they do go here:  

##### Setting Attributes
* [SetAttributeMethod](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)

##### Accessing Elements on the page
There are different methods to do this as we explored in class. Feel free to use any that you are comfortable with. __Rememeber__ that if the method returns a list you will have to access the list item that you want!  

* [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)  
* [getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)  
* [getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)  
* [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)  
* [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)  


#### Workshop Handin instructions  
Remember that in order to see your assignment on your website you will have to run: 

```
git add .
git commit -m"some message"
git push
```

You will enter that command from inside your class repository.  

