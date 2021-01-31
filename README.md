# RecipesInYourFridge

## Description

1. **app.py** - the backend server
2. **ui-angular** - the angular app
3. **template** and **static** folders - used for connection between server and angular app

### To run

1. Clone the repo
2. `python3 -m venv venv`
3. `pip install Flask`
4. `ng build--base-hrefc/static`(if any changes to frontend). This will take all *.ts files from the anulgar CLI and compile them into a distribution folder(/uiangular/dist). 
5. Copy all *.js and *.map files from ui-angular/dist to static/ and copy index.html from ui-angular/dist to templates/ 
6. `python3 app.py`(the server runs on http://127.0.0.1:5000/)
