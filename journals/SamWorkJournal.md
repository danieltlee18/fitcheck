-27-Mar	Day1 of coding, I coded in the morning and observed in afternoon. I Started fleshing out the api's for our outfits completing the basemodels for OutfitIn, OutfitOut, some of the ratings stuff (needs updating) before getting started on authentication. Got a working hardcoded response for outfit out. Helped Amro in group programming with setting up the database to ensure the front end stuff can work with it. Got create and list working with the database but no authentication yet. Logan took lead of getting authentication started afterwards. Got the login and logout endpoints working and making progress towards creating a user.

28-Mar	Day2 Of coding, Was assisting development of auth system with SQL database (creating migrations, following JWT apis). I did some debugging in the evening with cursor not returning from database. Estimate done with auth tomorrow or early Thursday at the latest. Auth is a blocker to do any other backend work.

29-Mar	Day3, Seemed to get Auth working, fleshing out the ratings and outfit pathes. Got outfit creation working with auth id, working on ratings too. Amro split off to do front-end stuff. Logan, Dan and I (sam) worked together in live share, we decided to take turns who shares screen and does git stuff.

30-Mar	day4 of coding. Create rating working and assosiates rating with user who created it. Added some data integrety protection, ensuring ratings are the correct value and you cannot submit more than one rating per outfit with 400 codes. I coded with Logan and Dan assisting in live workspace as well as screen sharing. Amro working on his front end magic

3-Apr	Added ratings to be included for each outfit when we list outfits. Refactored code for logic to be in queries not in router. Dan was the point man on the keyboard while we group programmed. Made api more restful
4-Apr	Dan on point for group formating to start and amro finishing up for the afternoon. Completed back-end functionality (Delete outfit). Started on front end login functionality
5-Apr	Built signup form, added redux store state functionality. Implemented store state for  login and signup form. Queries coming next. I coded.
6-Apr	Logan the man on the keyboard today. Got login and signup talking to backend with redux. Now creates accounts and logs them in.
7-Apr	Dan and Amro coded today. Logout functionality works. Started work on create outfit page. Now dynamically loads image and shows preview when you paste a url
17-Apr	Dan on the keyboard first and I followed up after lunch. Got creating an outfit and listing outfits to work with redux and backend. Still needs some polish and filtering done to list only your own outfits
18-Apr	Logan and Amro on the keys today. Made good progress with ratings (its almost functional enough) still need to get skip functionality to work and maybe a better filter function. Have barebones reducer for ratings. List outfits now have filters
19-Apr	Amro in the morning, Logan in the afternoon and I squeezed an hour in late. Ratings functionality refactored and backend expanded to include average ratings on the data so front end doesn't need to calculate it.
20-Apr	Logan and I on the keys today. Finished dashboard sort rating functionality and spent some time with css getting things looking better including scrollbar, text spacing, size of elements. Skip functionality only thing left for MVP
