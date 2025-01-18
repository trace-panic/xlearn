package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/trace-panic/xlearn/internal/routes"
)

func main() {
	r := chi.NewRouter()
	routes.SetupRoutes(r)
	log.Fatal(http.ListenAndServe(":8080", r))
}
