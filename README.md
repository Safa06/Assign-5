
*****************************************************************************************************************
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
*****************************************************************************************************************


*********************** Answer: 1 ******************
getElementById: 
    - It takes values depending on the unique id only. 
    - It can select only one item at a time as id is unique for every element.
    - It returns or give the element based on the unique id. Elements ids must be unique otherwise it won't work

getElementsByClassName:
    - It takes all the elements whose class names are similar
    - It selects all the elements based on their class.
    - It returns a collection (HTML collection)

querySelector:
    - It can use ids, class names, tag names, any attribute selectors using css selectors
    - Though it can take elements based on these properties, it only return the first element. Not the others though others are matched also, only returns the first element.

querySelectorAll:
    - It is similar to querySelectorAll but returns the different things
    - It returns all the matched items. Not only the first matched one element like querySelector
    - Returns a nodeList or collection of all the elements.




*****************************************************************************************************************
2. How do you create and insert a new element into the DOM?
*****************************************************************************************************************

*********************** Answer: 2 ******************

To create a new element "createElement" and to insert the element into DOM "appendChild" is used.
Example: I have a div with an id named "container". To create an element suppose another div into it the process is -
    1. get the parent div id : 
        const parentDiv = document.getElementById('container');
    2. create a new div into it : 
        const newDiv = document.createElement('div');
    3. now you can set any properties (innerHTML, id, class etc) into it if you want, otherwise not needed to do that :
        newDiv.innerHTML = `<p> Hello</p>`
    4. lastly, you have to append this new div to the parent div:
        parentDiv.appendChild(newDiv);




*****************************************************************************************************************
3. What is Event Bubbling and how does it work?
*****************************************************************************************************************

*********************** Answer: 3 ******************

When an events is created for a child element, it bubbles up to the parents, then parent's parent element and so on and lastly reaches to the document.
Example: 
I have a div and button in it in the body. If I click on the button, an event will handled for the button as click event is done. then it will go to the button's parent, div. Thus it will bubble up to the div's parent(if have any otherwise to the body), then body, then html and lastly to the document will get the event.



*****************************************************************************************************************
4. What is Event Delegation in JavaScript? Why is it useful?
*****************************************************************************************************************

*********************** Answer: 4 ******************
Event Delegation is used -
    - where event listener is created for the parent element and can manage the events for its all children which are triggered. 
    - It is useful as event is not needed to create for separate children. One event is attached for the parent and it can manage all the children triggered events.
    - It makes code reduced, easy to understand as separate event listeners are not created for the same, only is created for the parent.
    



*****************************************************************************************************************
5. What is the difference between preventDefault() and stopPropagation() methods?
*****************************************************************************************************************

*********************** Answer: 5 ******************
preventDefault() :
    - It stops browser default actions based on the event.
    - If I submit a form or click on any link, it won't do the default behavior like form submission, link navigation.
    - Won't hamper any events work like bubbling or capturing.

stopPropagation() :
    - It stops further propagation for an event. 
    - It stops bubbling up to the parent elements and going down to the children element. Overall it restricts on the propagation of the events.
    - Won't hamper any default works of a browser

Both can be used together as there working process is different.