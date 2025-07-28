<h1>
  <span class="headline">MEN Stack Session Auth</span>
  <span class="subhead">Build the Sign In Page</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to create a page with a form for users to sign in.

## Creating the sign in template

Now that users have the ability to sign up for an account, the next step is to create a form for them to sign ***in*** to the application. This sign-in form will closely resemble the sign-up page, but with a few key differences: we'll omit the `confirmPassword` field, and the form's `action` attribute will direct to a different URL.

Create a new `sign-in.ejs` template in your `views/auth` directory:

```bash
touch views/auth/sign-in.ejs
```

Add the following HTML boilerplate and form to `views/auth/sign-in.ejs`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign In</title>
  </head>
  <body>
    <h1>Sign in</h1>
    <form action="/auth/sign-in" method="POST">
      <label for="username">Username:</label>
      <input type="text" name="username" id="username" />
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Sign in</button>
    </form>
  </body>
</html>
```

## Define the route

Next, we can add a simple route to our `authController` to render this template:

```javascript
router.get("/sign-in", (req, res) => {
  res.render("auth/sign-in.ejs");
});
```

## Add a navigation link to the sign in page

Finally, let's also add a link on our landing page for the sign in page.

In `views/index.ejs`:

```html
<a href="/auth/sign-in">sign in</a>
```

Test the route by navigating from the landing page link.

<!-- [Starter Code](https://git.generalassemb.ly/modular-curriculum-all-courses/men-stack-session-auth-template/tree/build-the-sign-in-page-start)

[Complete Code](https://git.generalassemb.ly/modular-curriculum-all-courses/men-stack-session-auth-template/tree/build-the-sign-in-page-complete) -->
