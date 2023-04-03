3/27 - First day of coding, started the day off observing and ended the day with some coding. We started working on our api's for outfits and completed the base models for all our outfits. Started setting up our DB in postgres and started working in authenticaion

3/28 - Continued working on authorization systems within our SQL database(with JWT and creating migrations). Sam worked on some debugging revolving around the cursor not returning from the database.

3/29 - Auth seems to be working and started fleshing out details involving ratings and outfit paths. Outfit creation is working now with auth_id through browser cookie. Amro started to split off to start working on front-end and the rest of us went on a live-share in vscode to work out the smaller bugs in our code

3/30 - Now able to create a rating and the rating is associated with the ID of the account that made the rating. Also made it so only one rating per outfit is allowed based on the account's id.

4/3 - Worked with the group through a liveshare to refactor all of our code in queries and router files to make the code make more sense for the purpose of the files. Fixed code so that rating will be attached to outfits when listing outfits. 90% done with back-end just need to add delete functions for outfits and figure out how we will average out the ratings
