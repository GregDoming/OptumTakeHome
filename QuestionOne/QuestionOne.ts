// User gets confused with user from Question 2
type UserTest = {
    userID: number,
    groupID: number
}
class UserManager {
    // The user array is an array of objects but the type of the data in the array is never declared. Also no User class, interface, or type defined
    //user should be protected or private because you wouldn't want anything outside of the class changing it

    public users: UserTest[];
    //"users" should be typed withing the constructor
    public constructor(users) {
        this.users = users;
    }
    // int is not a type would have to be number or bigInt and no need to type in for loop. No user class defined to return
    public getUser(userID: int): UserTest {
        //user needs non null assertion or needs to be instantited
        let user: UserTest
        //let instead of int
        for (int i = 0; i < this.users.length; i++) {

            let currentUser = this.users[i];
            if (currentUser.userID == userID) {
                user = currentUser;
            }
        }

        return user;
    }

    

    public getUsersForGroup(groupID: int): UserTest[] {
        //Should initialize array as empty array User[] = []
        let groupUsers: UserTest[];
        //let instead of int
        for (let i = 0; i < this.users.length; i++) {

            let currentUser = this.users[i];
            if (currentUser.groupID == groupID) {
                groupUsers.push(currentUser);
            }
        }

        return groupUsers;
    }
}


