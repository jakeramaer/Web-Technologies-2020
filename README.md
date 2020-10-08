# Web Technologies - Marmalade Bristol Website Coursework (2020)
(Graded at 80%)

The presented website is for the student led organisation Marmalade Bristol, who create clothing designs to fundraise for local charities. The site is used by the public to submit their own work for review and explore past fundraisers, as well as providing a brief background on the organisation.

<img src="https://github.com/jakeramaer/Web-Technologies-2020/blob/main/Screenshot%201.png" width="300">

<img src="https://github.com/jakeramaer/Web-Technologies-2020/blob/main/Screenshot%202.png" width="300">


## Key Features
* Solid HTML5 structure for all pages. A validator plugin was used to ensure all pages were constantly correct and in line with W3C.
* All style separate from HTML. CSS grid used to generate side by side divs which stack automatically for smaller screen sizes. All content scales appropriately. Transitions used for link animations.
* Adaptation of TimelineMax framework used for homepage landing screen animation, AOS (Animate on scroll) for fade-in grid elements. Masonry framework to display grid of images. Implemented imagesLoaded from scratch so dynamically added images are not overlaid. Generate appropriate requests to server using fetch API. 
* SQlite3 integrated into server side module, used for storing user signup detail, password encryption data, session and cookie information for users who have logged in and information about files uploaded by users
* Server written in javascript using express framework. Handles inserts, deletes and updates to the database. Handles user signups, encrypts users passwords to store in the database. Handles file uploading by users using multer. Sets up express-session and configures cookuser ies for users that have logged in. Authenticates cookies for users accessing resources only available to logged in users.Sends data back to users, e.g. status of sign up request etc. photos uploaded by user, appropriate error messages.
* Implemented a personalised  profile page for logged in users. Here data specific to a user is retrieved from the server and is laid out on the page. The page also affords the ability to upload images and delete images.
