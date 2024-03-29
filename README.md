# Foliary
A full-stack houseplant app for tracking plant care and houseplant recommendations.

**Link to project:** https://proud-newt-handkerchief.cyclic.app/

![Animated .gif of Foliary homepage and plant search features in use](https://user-images.githubusercontent.com/96848086/184700355-05bb8887-5441-4a24-9846-132bdae690ac.gif)

## How It's Made:

**Tech used:** JavaScript, Node, Express, MongoDB, Mongoose, Passport.js, HTML, CSS, Bootstrap

![Screenshot of Foliary plant dashboard page](https://user-images.githubusercontent.com/96848086/184702875-fe88aa84-441d-480f-8b42-759e01427033.png)



Full-stack houseplant care and search app build with MongoDB/Mongoose, Node.js, Express, and Bootstrap. Users can search for plants by care needs; be recommended similar plants to ones they already own; create a user profile and track plant growth and care with a care diary, complete with notes and image upload functionality.

![Screenshot of Foliary plant detail page](https://user-images.githubusercontent.com/96848086/184702852-ac29dde9-0c6d-49a3-ae42-e039e5f11db5.png)

## Optimizations

I am currently tracking small optimizations in the issue tracker on this repo. The biggest feature that I want to add is the ability to share plant collections within a household, so that all members of a household could log plant care, upload photographs, add notes, etc. 

## Lessons Learned:

Many! The biggest lesson I learned is how much goes into something seemingly simple like a login flow. There is the basic setup of registering and logging in through passport.js, but then there are so many details to manage beyond just that (confirming email, a 'forgot your password' flow, different authentication strategies, choices of how to secure password data). 

