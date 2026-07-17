/*
Build a simple login + role-check system that verifies username/password and 
shows a different message based on admin/user role — 
combine everything from this module (comparison, logical operators, if-else, ternary).
*/

/*
==========================================
Login and Role Check System
==========================================

Rules:
1. Check if the username and password are correct.
2. If login is successful:
   - If the user is an admin, show "Welcome Admin!"
   - Otherwise, show "Welcome User!"
3. If login fails:
   - Show "Invalid username or password."
4. Use a ternary operator to show the account status.
*/

const username = "admin";
const password = "12345";
const isAdmin = true;
const isActive = true;

if (username === "admin" && password === "12345") {
    console.log("Login Successful!");

    if (isAdmin) {
        console.log("Welcome Admin!");
    } else {
        console.log("Welcome User!");
    }

    const accountStatus = isActive ? "Account Active" : "Account Inactive";
    console.log(accountStatus);

} else {
    console.log("Invalid username or password.");
}