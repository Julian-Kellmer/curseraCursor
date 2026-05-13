let userRole ="manager";
let isLoggedIn = true;

let accessLevel;
let userMessage;

let userType = "suscriber";
let userCategory;

let isAuthemticated = true;
let isAuthemticatedStatus= isAuthemticated? 'autenticated': 'not authhenticated'

if (userRole === 'admin') {
    accessLevel = 'full access granted'
}else if (userRole === 'manager'){
     accessLevel='limited access granted'
}else{
    accessLevel= 'you are not welcome here'
}

if(isLoggedIn){
    if(userRole === 'admin'){
        userMessage = 'Welcome admin';
    } else if(userRole === 'manager'){
        userMessage = 'welcome manager';
    } else {
        userMessage = 'welcome user';
    }
}else{
    userMessage = 'please log in to access the system';
}

console.log('AccesLevel:', accessLevel)
console.log ('User Message :', userMessage)

switch(userType){
    case'admin':
        userCategory='administrator';
        break;
    case "manager":
        userCategory='Manager';
        break;
    case 'suscriber' :
        userCategory= 'Suscriber'
        break;
        default:
            userCategory='Unknown'
}
console.log("User Category:", userCategory);
console.log("User Authenticated Status:",isAuthemticatedStatus );