03/27/23 | Started coding in a group today. Started working on the APIs we needed to flesh out and made routes for listing and creating outfits. Will begin working on authentication tomorrow.


03/28/23 | Started working on backend authentication today. We were not able to finish it today but we made good progress. We had to adapt the materials from MongoDB to PostgreSQL for auth, and things weren't working the way I expected.


03/29/23 | After a good bit of issues, we ended up getting authentication to seemingly function properly. We were able to create an account, login, and logout. We were also able to get authentication to work with creating an outfit so that only logged in users can create outfits. Tomorrow we should be able to finish the code allowing for users to create a rating for an outfit.


03/30/23 | We were able to finish the create rating code and we created ratings with the user attached to it. We added an if statement to ensure that the user could only give ratings that we previously agreed on. The next thing we need to do is get the ratings for an outfit to show in the list outfit function.


04/03/23 | We all coded together again today and worked on getting the ratings to show up with their respective IDs and values when listing all outfits. We were able to successfully implement that and then worked on refactoring code from the routers into their respective repos, and made endpoints more RESTful.


04/04/23 | Finished the login page for the front-end, and got it to mesh well with the design we currently have. We worked with different CSS stylings to get things where we wanted them to be and to get the functinality we wanted.


04/05/23 | We worked on getting the Redux set up so that we can implement the front-end signup and login functionalities. We have the code in place, so we should just have to connect it to our login and signup JSX.


04/06/23 | Today we finished up the front-end signup and login functionalities. A user is now able to create an account, which will redirect them to the dashboard of our website. A user is also able to login which will also redirect them to the dashboard of the site. We just need to implement the logout functionality and then authentication should be complete.


04/07/23 | Today we implemented the logout functionality for our application. We started creating the page for allowing users to upload their outfits.


04/17/23 | We finished up the functionality for the create an outfit page, as well as started on the list outfits page. To finish the latter, we need to filter the outfits by only the ones created by the current user. We should be able to finish that by tomorrow.


04/17/23 | We finished adding the filter to the list outfits page to only show the current user's outfits. We mostly finished up the rating page, and just need to add a filter that only shows outfits that do not belong to the user. We will finish that tomorrow along with the functionality to show the user's top 3 outfits on the dashboard.
