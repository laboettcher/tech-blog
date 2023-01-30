const withAuth = (req, res, next) => {
    // Redirect user to login page if they are not logged in
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      // If user is logged in, then take to homepage/dashboard and allow to post etc.
      next();
    }
  };
  
  module.exports = withAuth;