package routes

import (
	"github.com/go-chi/chi/v5"
	"github.com/trace-panic/xlearn/internal/handlers"
)

func SetupRoutes(r chi.Router) {
	r.Route("/users", func(r chi.Router) {
		r.Get("/", handlers.GetUsers)
		r.Post("/", handlers.CreateUser)
		r.Get("/{userID}", handlers.GetUser)
	})
}
