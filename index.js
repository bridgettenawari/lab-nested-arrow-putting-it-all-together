function createLoginTracker(userInfo = {
  "username": "user1",
  "password": "password123"
}) {
  let attemptCount = 0;

  const loginAttempt = (passwordAttempt) => {
    attemptCount++;
    if (passwordAttempt === userInfo.password) {
      return "Login successful"
    }
    if (passwordAttempt !== userInfo.password && attemptCount <= 3) {
      return `Attempt ${attemptCount}: Login failed`
    }
    else if (passwordAttempt === userInfo.password) {
      return "Login successful"
    }
    else if (passwordAttempt !== userInfo.password && attemptCount <= 3) {
      return `Attempt ${attemptCount}: Login failed`
    }
    else if (passwordAttempt === userInfo.password) {
      return "Login successful"
    }
    else if (passwordAttempt !== userInfo.password && attemptCount <= 3) {
      return `Attempt ${attemptCount}: Login failed`
    }
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts"
    }
  }
  return loginAttempt;

}



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};