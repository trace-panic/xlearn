# Variables
GO=go
BINARY_NAME=bin/xlearn
CMD_DIR=./cmd
BUILD_DIR=./bin

# Default target: build and run the application
.PHONY: all
all: build run

# Build the project
.PHONY: build
build:
	$(GO) build -o $(BINARY_NAME) $(CMD_DIR)

# Run the application
.PHONY: run
run:
	$(GO) run $(CMD_DIR)

# Clean the binary files
.PHONY: clean
clean:
	rm -f $(BINARY_NAME)

# Install project dependencies
.PHONY: tidy
tidy:
	$(GO) mod tidy

# Run tests
.PHONY: test
test:
	$(GO) test ./...
