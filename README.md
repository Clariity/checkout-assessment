# Checkout-Reviews

At Checkout-Reviews you can

- Write a review for a product (name, email, rating 1 to 5 stars and a ‘comment’ section).
- See all the comments for the product.
- See a chart showing the number of ratings for each level of rating.

## Run locally

The website has been deployed to Vercel at:

If you wish to run it locally, you can do so with the following:

```bash
npm i
npm run dev
```

### Testing

To run the tests you can run.

```bash
npm run test
```

Components and Pages have 100% test coverage.

## How to use

### Form

To fill out the form you must:

- Enter a name into the name field, profane words are not allowed
- Enter a valid email address into the email field
- Select a star rating of at least 1 star
- Enter a comment into the comment field, profane words are not allowed

Once all of those are completed you can click Submit. If you have missed a step, an error message will show and the fields you have not completed correctly will be highlighted.

You will know you have submitted successfully as:

- a modal will pop up confirming the submission.
- the graph will animate and adjust accordingly to the new rating
- the new rating will appear at the top of the list of reviews

### Theme

You can click the icon in the top right of the page in the navbar to switch between light and dark theme.

## Choices Made and Potential Improvements

### Design Choices

- I opted to make my own graph as I thought it would be fun to do and I didn't want to rely on a third party library, I am quite happy with the result. Simple but effective.
- I made the site responsive so it will also work on mobile
- I considered using Firebase to store the reviews permanently instead of the reviews just lasting whilst the page is loaded. However this means that I would have had to setup auth, google captcha to prevent bots, and running locally wouldn't have been seamless as Secrets would be needed to access the firestore data. So for the sake of time I opted to mock that out.

### Accessibility

- I added theming that defaults to the user's system preference as users may find it easier to read darker themes.
- I used semantic html for the nav and footer for screen readers.
- I added error checking and highlighting to make the form as intuitive as possible to use, each element is uniquely named for screen readers.
- You can also navigate the form using keyboard only, utilising the tab key to move around the form and submit it. The site has 100 accessibility score on lighthouse.

### Tech Stack

- I used Next.js as it is used at Checkout and it is a great framework
- I used tailwind for css as it meant I had to write very little in my css files and it sped up development.
- I used Testing Library and Jest for testing as they are the best approach to unit testing React.
- I used Vercel for CI/CD as it is beautifully simple and very fast, and also provides inbuilt logging and metrics.
- I used TypeScript for better linting/compilation and type safe development.

### Possible Improvements

- A products page with unique reviews for each product, as currently this page on its own doesn't make much sense, we don't know what we are reviewing.
- Auth so people cannot post as just anyone.
