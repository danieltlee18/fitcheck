3/27 - First day of coding, started the day off observing and ended the day with some coding. We started working on our api's for outfits and completed the base models for all our outfits. Started setting up our DB in postgres and started working in authenticaion

3/28 - Continued working on authorization systems within our SQL database(with JWT and creating migrations). Sam worked on some debugging revolving around the cursor not returning from the database.

3/29 - Auth seems to be working and started fleshing out details involving ratings and outfit paths. Outfit creation is working now with auth_id through browser cookie. Amro started to split off to start working on front-end and the rest of us went on a live-share in vscode to work out the smaller bugs in our code

3/30 - Now able to create a rating and the rating is associated with the ID of the account that made the rating. Also made it so only one rating per outfit is allowed based on the account's id.

4/3 - Worked with the group through a liveshare to refactor all of our code in queries and router files to make the code make more sense for the purpose of the files. Fixed code so that rating will be attached to outfits when listing outfits. 90% done with back-end just need to add delete functions for outfits and figure out how we will average out the ratings

4/4 - Created a delete function for outfits and finalized the skeleton/mvp of our back-end. Started working on front-end as a group and created a log-in functionality that popped up with a blurry background upon pressing the log-in button on the landing page. Also created a button on the landing page that would pop up at the same time as the login/signup page that would make the pop ups disappear.

4/5 - Sam started work on finishing up the front-end side of the sign-up page as well as using redux to create the forms. Have not yet started connecting it with the back-end and I think we still have some front-end AUTH to finish

4/6 - Finished up front-end authentication as well as log-in and sign-up functionality. When signing up or logging in, upon a successful request, the page will redirect the logged-in user to the dashboard where they will be able to use all the functionalities to be implemented later

4/7 - Added a logout functionality that will delete the user's cookies upon clicking the logout button and started working on creating an outfit by connecting the back-end with our newly created frontend file

4/17 - Created a functional "create outfits" page that will take in the inputs of a user on the form and push that information to the back-end where their outfit will be created. Also started working on creating a list outfits page that will also show user's outfits along with the associated ratings

4/18 - Started working on the rating functionality  of our front-end. Ran into some problems which required us to go back and edit/create some functions in our back-end so that a user clicking a rating from a bar will track the associated rating to the outfit
