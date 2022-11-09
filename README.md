# Tech Blog

## Deployed Link:
https://tech-blog-seban.herokuapp.com/

## Usage
User should go to the deployed link.  Upon putting the link in the browser the server will serve up the homepage with all the posts saved in the database.  The user should click login where they will be served the login page that will also allow them to create an account.  

## Technologies Used
- Heroku - a platform as a service that enables developers to build, run, and operate applications entirely in the cloud.  Used for deploying application.
- sequelize - a Node. js-based Object Relational Mapper that makes it easy to work with MySQL.
- bcrypt - password hashing function.
- Express.js - Express is a node js web application framework that provides broad features for building web and mobile applications. 
- MySql - Open source database used to store tables in this project. 
- Node.js - An asynchronous event-driven program to run Javascript.
- JavaScript - Allows developer to make static webpages dynamic and interactive.  For this exercise it was used to alter the original webpage to change the questions, change the answers, add a dynamic timer/countdown(that also ends the game), as well as, allow saving of scores.
- Git - Git is what I used to work on my personal computer and pushing my work to GitHub.
- GitHub - A cloud based repository that holds my saved code reserved for resetting my personal computer deployment.

## Description

The purpose of this project was to utilize our skills with both front and back end development to produce a tech blog application.

## Installation

Follow the deployed link to the website on heroku where you should see already seeded data as posts on the homepage.

## Lessons Learned
The most effective lessons learned for me were...
1. Writing routes that render and react with handlebars.  


## Code Snippets
JavaScript
```javaScript
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User]
        });
        const posts = postData.map((post) => post.get({plain: true}))
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
        // res.json(posts);
    }catch (err) {
        res.status(500).json(err);
    }
});
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
      }
      res.render('login');
});
module.exports = router;
```
```JavaScript
<header class="display-flex justify-space-between align-center p-2">
    <h1>
      Tech Blog
    </h1>
    {{#if logged_in}}
    <nav>
    <a href="/"><button class="btn" href="/" id="Home">Home</button></a>
      <button class="btn" id="logout">logout</button>
    </nav>
    {{else}}
    <nav>
    <a href="/login"><button class="btn" href="/login" id="login">login</button></a>
    </nav>
    {{/if}}
  </header>
  <main class="container container-fluid mt-5">
    {{{ body }}}
  </main>
```

## Credits

NA

## License
Please refer to the LICENSE in the Repo.