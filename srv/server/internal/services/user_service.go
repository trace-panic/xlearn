package services

import "fmt"

type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

var users = []User{
	{ID: "1", Name: "John Doe"},
	{ID: "2", Name: "Jane Doe"},
}

func GetAllUsers() ([]User, error) {
	return users, nil
}

func CreateUser(user User) error {
	users = append(users, user)
	return nil
}

func GetUserByID(id string) (User, error) {
	for _, user := range users {
		if user.ID == id {
			return user, nil
		}
	}
	return User{}, fmt.Errorf("User not found")
}
