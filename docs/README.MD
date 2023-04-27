# FitCheck

- Daniel Lee
- Amro Salha
- Sam Shenker
- Logan Costilow

## Design

- [API design](docs/apis.md)
- [Data model](docs/data-model.md)
- [GHI](docs/GHI_/ghi.md)
- [Integrations](docs/integrations.md)

## Intended Market

We are targeting general consumers across a broad spectrum of markets involving a highly-personalized product that will help users get feedback on and give feedback to others' outfits. Consumers of the fasion industry, clothing, and similar industries will find the product to be suitable to their tastes.

## Functionality

- Visitors will be initally met with the landing page which will display a log-in and sign-up button which will redirect to the dashboard upon the form succesfully being completed
- Users to the site can receive and give feedback on user uploaded outfits
- Users can see their three top rated outfits on their dashboard along with the ability to rate other user's outfits
- The navbar will be displayed at the top of every endpoint and will include:
    - The 'My Outfits' tab will display all of the logged-in user's outfits along with all of the ratings associated with said outfits
        - Users will also be able to delete their outfits from this page
    - The 'Rate Outfits' tab will display all outfits individually that do not belong to the logged-in user and will display:
        - Image uploaded to the outfit that will be subject to rating
        - The Style and Occasion associated with the outfit
        - Three rows of categories that will be the content of the ratings
    - The 'Upload Outfits' tab will display a form that will allow a user to upload an image url, occasion, and choose among three different styles to categorize their outfit
    - The 'Logout' tab will delete a user's cookie from the browser and redirect them to the landing page

## Project Initialization

To fully enjoy this application on your local machine, please make sure to follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run `docker volume create fastapi-FitCheck-data`
4. Run `docker compose build`
5. Run `docker compose up`
<!-- 6. Run `docker exec -it smelli-belli-inventory-api-1 bash` -->  ADD THIS LATER NOT DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
<!-- 7. Run `python manage.py loaddata products.json` -->
8. Exit the container's CLI, and enjoy FitCheck to its fullest!
